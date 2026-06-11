import { useState } from "react";
import "./App.css";
import TransactionForm from "./components/TransactionForm";
import Summary from "./components/Summary";
import TransactionList from "./components/TransactionList";
import SpendingChart from "./components/SpendingChart";
import InsightCard from "./components/InsightCard";

function App() {
  const [transactions, setTransactions] = useState([]);

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
      <TransactionForm addTransaction={addTransaction} />
      <TransactionList transactions={transactions} />
      <SpendingChart />
      <InsightCard />
    </div>
  );
}

export default App;