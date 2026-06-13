import { useState } from "react";

function TransactionForm({ addTransaction }) {
  const [formData, setFormData] = useState({
    amount: "",
    category: "",
    type: "expense",
    date: "",
    note: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!formData.amount || !formData.category || !formData.date) {
      alert("Please fill amount, category and date");
      return;
    }

    const newTransaction = {
      id: Date.now(),
      amount: Number(formData.amount),
      category: formData.category,
      type: formData.type,
      date: formData.date,
      note: formData.note,
    };

    addTransaction(newTransaction);

    setFormData({
      amount: "",
      category: "",
      type: "expense",
      date: "",
      note: "",
    });
  }

  return (
    <div className="card">
      <div className="transaction-form-header">
        <h2>Add Transaction</h2>
        <p>Record income or spending in a few quick details.</p>
      </div>

      <form className="transaction-form" onSubmit={handleSubmit}>
        <input
          className="transaction-input"
          type="number"
          name="amount"
          placeholder="Amount"
          value={formData.amount}
          onChange={handleChange}
        />

        <input
          className="transaction-input"
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
        />

        <select
          className="transaction-select"
          name="type"
          value={formData.type}
          onChange={handleChange}
        >
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>

        <input
          className="transaction-input"
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />

        <input
          className="transaction-input"
          type="text"
          name="note"
          placeholder="Note (optional)"
          value={formData.note}
          onChange={handleChange}
        />

        <button className="transaction-button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default TransactionForm;