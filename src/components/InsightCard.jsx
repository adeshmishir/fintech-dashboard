function InsightCard({ transactions }) {
  const expenses = transactions.filter(
    (transaction) => transaction.type === "expense"
  );

  const totalExpense = expenses.reduce(
    (sum, transaction) => sum + transaction.amount,
    0
  );

  const expenseByCategory = {};

  expenses.forEach((transaction) => {
    expenseByCategory[transaction.category] =
      (expenseByCategory[transaction.category] || 0) + transaction.amount;
  });

  let topCategory = "";
  let maxAmount = 0;

  for (let category in expenseByCategory) {
    if (expenseByCategory[category] > maxAmount) {
      maxAmount = expenseByCategory[category];
      topCategory = category;
    }
  }

  let insight = "Add expenses to get a spending insight.";

  if (totalExpense > 0) {
    const percentage = ((maxAmount / totalExpense) * 100).toFixed(1);

    insight = `${topCategory} accounts for ${percentage}% of your total expenses.`;
  }

  return (
    <div className="card">
      <h2>Insight</h2>
      <p>{insight}</p>
    </div>
  );
}

export default InsightCard;