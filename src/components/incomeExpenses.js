import React from "react";
import { useGlobalContext } from "./context/GlobalState";

export const IncomeExpenses = () => {
  const { transactions } = useGlobalContext();

  const income = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => (acc += transaction.amount), 0)
    .toFixed(2);

  const expense = transactions
    .filter((transaction) => transaction.amount < 0)
    .reduce((acc, item) => (acc += item.amount), 0)
    .toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">${income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">${Math.abs(expense)}</p>
      </div>
    </div>
  );
};
