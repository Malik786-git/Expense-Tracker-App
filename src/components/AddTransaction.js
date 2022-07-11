import React, { useContext, useState } from "react";
import { myContext } from "../context/contextApi";

const AddTransaction = () => {

  const {addTransaction} = useContext(myContext);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const onSubmit = (e)=> {
    e.preventDefault();
    const newTransaction = {
      id: new Date().getTime(),
      description,
      amount: +amount
    }
    
         addTransaction(newTransaction);
  }

  return (
    <div className="Add-Transaction">
      <h3>Add New Transaction</h3>
      <form onSubmit={onSubmit}>
        <label htmlFor="des">Decsription</label>
        <input
          type="text"
          name=""
          id="des"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label htmlFor="am">Amount</label>
        <input
          type="number"
          name=""
          id="am"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit">Add Transaction</button>
      </form>
      <div className="developer">
        <u>Expense Tracker App by Jaffery Coder</u>
      </div>
    </div>
  );
};

export default AddTransaction;
