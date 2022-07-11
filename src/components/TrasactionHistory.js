import React, { useContext } from 'react'
import { myContext } from '../context/contextApi'
import Transaction from './Transaction';

const TrasactionHistory = () => {

  const {transactions} = useContext(myContext)

  return (
    <div className='History'>
        <h3>Transaction History</h3>
        <div className="list">
            <ul>
                 {
                     transactions.map((transaction)=> <Transaction key={transaction.id} transaction={transaction}/>)
                 }
            </ul>
        </div>
    </div>
  )
}

export default TrasactionHistory;
