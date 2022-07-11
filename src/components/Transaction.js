import React, { useContext } from "react";
import { myContext } from "../context/contextApi";

const Transaction = ({transaction}) => {
  
  const {delTransaction} = useContext(myContext);

  const sign = transaction.amount > 0 ? '+': '-'; 
  const transactionType = transaction.amount > 0 ? 'plus': 'minus';
  return (
    <li className={transactionType}>
      <div className="detail-history">
        <button onClick={()=> delTransaction(transaction.id)}>X</button>
        <span>{transaction.description}</span>
      </div>
      <div>
        <span>{sign}${Math.abs(transaction.amount)}</span>
      </div>
    </li>
  );
};

export default Transaction;
