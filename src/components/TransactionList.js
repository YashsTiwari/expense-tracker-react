import React from "react";
import { useGlobalContext } from "./context/GlobalState";
import { Transaction } from "./Transaction";

export const TransactionList = () => {
  const { transactions } = useGlobalContext();
  return (
    <>
      <h3>History</h3>
      {transactions.length === 0 ? (
        <p style={{ textAlign: "center" }}>Do some transactions 🤑</p>
      ) : null}
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction transaction={transaction} key={transaction.id} />
        ))}
      </ul>
    </>
  );
};
