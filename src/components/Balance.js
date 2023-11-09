import React from "react";
import { useGlobalContext } from "./context/GlobalState";

export const Balance = () => {
  const { transactions } = useGlobalContext();

  const amount = transactions.map((transaction) => transaction.amount);
  const balance = amount
    .reduce((acc, transaction) => (acc += transaction), 0)
    .toFixed(2);

  return (
    <div>
      <h4>Your Balance</h4>
      <h1>${balance}</h1>
    </div>
  );
};
