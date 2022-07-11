import React, { useContext } from 'react'
import { myContext } from '../context/contextApi'

const Balance = () => {
  
  const {transactions} = useContext(myContext);

  const balance = transactions.map((transacion) => transacion.amount)
                             .reduce((transaction,acc)=> (acc += transaction),0)
                             .toFixed(2);
  return (
    <div className='Balance'>
         <h3>CURRENT BALANCE</h3>
         <h1>${balance}</h1>
    </div>
  )
}

export default Balance
