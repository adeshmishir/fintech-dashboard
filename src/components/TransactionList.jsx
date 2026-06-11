import { useState } from "react";

function TransactionList({ transactions }) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    "all",
    ...new Set(transactions.map((transaction) => transaction.category)),
  ];

  const filteredTransactions =
    selectedCategory === "all"
      ? transactions
      : transactions.filter(
          (transaction) => transaction.category === selectedCategory
        );

  return (
    <div className="card">
      <h2>Transactions</h2>

      <select
        className="filter-select"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        {categories.map((category) => (
          <option value={category} key={category}>
            {category === "all" ? "All Categories" : category}
          </option>
        ))}
      </select>

      {filteredTransactions.length === 0 ? (
        <p>No transactions found.</p>
      ) : (
        <div className="transaction-list">
          {filteredTransactions.map((transaction) => (
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