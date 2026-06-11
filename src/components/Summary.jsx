function Summary({ transactions }) {
  const totalIncome = transactions
    .filter((transaction) => transaction.type === "income")
    .reduce((sum, transaction) => sum + transaction.amount, 0);

  const totalExpense = transactions
    .filter((transaction) => transaction.type === "expense")
    .reduce((sum, transaction) => sum + transaction.amount, 0);

  const netBalance = totalIncome - totalExpense;

  const expenseByCategory = {};

  transactions
    .filter((transaction) => transaction.type === "expense")
    .forEach((transaction) => {
      expenseByCategory[transaction.category] =
        (expenseByCategory[transaction.category] || 0) + transaction.amount;
    });

  let topCategory = "None";
  let maxAmount = 0;

  for (let category in expenseByCategory) {
    if (expenseByCategory[category] > maxAmount) {
      maxAmount = expenseByCategory[category];
      topCategory = category;
    }
  }

  return (
    <div className="card">
      <h2>Summary</h2>

      <div className="summary-grid">
        <div>
          <p>Total Income</p>
          <h3>₹{totalIncome}</h3>
        </div>

        <div>
          <p>Total Expense</p>
          <h3>₹{totalExpense}</h3>
        </div>

        <div>
          <p>Net Balance</p>
          <h3>₹{netBalance}</h3>
        </div>

        <div>
          <p>Top Spending Category</p>
          <h3>{topCategory}</h3>
        </div>
      </div>
    </div>
  );
}

export default Summary;