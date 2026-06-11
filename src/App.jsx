import { useEffect, useState } from "react";
import "./App.css";
import TransactionForm from "./components/TransactionForm";
import Summary from "./components/Summary";
import TransactionList from "./components/TransactionList";
import SpendingChart from "./components/SpendingChart";
import InsightCard from "./components/InsightCard";

function App() {
  const [transactions, setTransactions] = useState(() => {
    const savedTransactions = localStorage.getItem("transactions");
    return savedTransactions ? JSON.parse(savedTransactions) : [];
  });

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  function addTransaction(transaction) {
    setTransactions([...transactions, transaction]);
  }

  return (
    <div className="app">
      <header className="header">
        <h1>Mini Fintech Dashboard</h1>
        <p>Track your income and expenses easily.</p>
      </header>

      <Summary transactions={transactions} />
      
<div className="dashboard-grid">
  <TransactionForm addTransaction={addTransaction} />
  <TransactionList transactions={transactions} />
  <SpendingChart transactions={transactions} />
  <InsightCard transactions={transactions} />
</div>
    </div>
  );
}

export default App;