import "./App.css";
import { Balance } from "./components/Balance";
import { AddTransaction } from "./components/AddTransaction";
import { Header } from "./components/Header";
import { TransactionList } from "./components/TransactionList";
import { IncomeExpenses } from "./components/incomeExpenses";
import { GlobalProvider } from "./components/context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
