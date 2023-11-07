import "./App.css";
import { Balance } from "./components/Balance";
import { AddTransaction } from "./components/AddTransaction";
import { Header } from "./components/Header";
import { TransactionList } from "./components/TransactionList";
import { IncomeExpenses } from "./components/incomeExpenses";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;
