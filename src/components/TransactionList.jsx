function TransactionList({ transactions }) {
  return (
    <div className="card">
      <h2>Transactions</h2>
      <p>Total transactions: {transactions.length}</p>
    </div>
  );
}

export default TransactionList;