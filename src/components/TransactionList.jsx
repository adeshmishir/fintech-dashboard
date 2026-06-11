function TransactionList({ transactions }) {
  return (
    <div className="card">
      <h2>Transactions</h2>

      {transactions.length === 0 ? (
        <p>No transactions added yet.</p>
      ) : (
        <div className="transaction-list">
          {transactions.map((transaction) => (
            <div className="transaction-item" key={transaction.id}>
              <div>
                <strong>{transaction.category}</strong>
                <p>{transaction.note || "No note"}</p>
              </div>

              <div>
                <strong>
                  {transaction.type === "income" ? "+" : "-"}₹
                  {transaction.amount}
                </strong>
                <p>{transaction.date}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TransactionList;