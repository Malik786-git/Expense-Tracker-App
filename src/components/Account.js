import React, { useContext } from 'react'
import { myContext } from '../context/contextApi'

const Account = () => {
  const {transactions} = useContext(myContext);
  const transactionAmount = transactions.map((transaction)=> transaction.amount);
  
  const income = transactionAmount.filter((transaction)=> transaction>0)
                                  .reduce((transaction, acc)=> (acc+=transaction),0)
                                  .toFixed(2);
                          
  
  const expense = Math.abs(transactionAmount.filter((transaction)=> transaction<0)
                                  .reduce((transaction, acc)=> (acc+=transaction),0))
                                  .toFixed(2);
                          


                                  

  console.log();
  return (
    <div className='Account'>
       <div className="income">
           <h4>INCOME</h4>
           <h4>{income}</h4>
       </div>
       <div className="expense">
           <h4>EXPENSE</h4>
           <h4>{expense}</h4>
       </div>
    </div>
  )
}

export default Account
