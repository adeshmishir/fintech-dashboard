import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function SpendingChart({ transactions }) {
  const expenseByCategory = {};

  transactions
    .filter((transaction) => transaction.type === "expense")
    .forEach((transaction) => {
      expenseByCategory[transaction.category] =
        (expenseByCategory[transaction.category] || 0) + transaction.amount;
    });

  const chartData = Object.keys(expenseByCategory).map((category) => ({
    name: category,
    value: expenseByCategory[category],
  }));

  const colors = ["#2563eb", "#16a34a", "#dc2626", "#f59e0b", "#7c3aed"];

  return (
    <div className="card">
      <h2>Spending by Category</h2>

      {chartData.length === 0 ? (
        <p>No expense data available for chart.</p>
      ) : (
        <div className="chart-box">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
                label
              >
                {chartData.map((entry, index) => (
                  <Cell
                    key={entry.name}
                    fill={colors[index % colors.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}

export default SpendingChart;