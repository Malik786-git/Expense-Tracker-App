import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
const initialState = {

    transactions:[
        {
        id: 1,
        description: 'Salary',
        amount: 10000
    },
    
    {
        id: 2,
        description: 'Tax',
        amount: -200
    },
    {
        id: 3,
        description: 'Freelance',
        amount: 5000
    },
    {
        id: 4,
        description: 'petrol',
        amount: -50
    }

]

};

export const myContext = createContext(initialState);



const GlobalProvider = ({children})=>{
  
  const [state, dispatch]  = useReducer(AppReducer, initialState);

  const delTransaction = (id)=> {
      dispatch({type: 'DEL_TRANSACTION', payload: id});
  }
  const addTransaction = (transaction)=> {
    // console.log(transaction); 
    
      dispatch({type: 'ADD_TRANSACTION', payload: transaction});
  }

    return (
        <myContext.Provider value={
            {
                transactions: state.transactions,
                delTransaction,
                addTransaction
            }
        }>
                       {children}
        </myContext.Provider>

    );
}

export default GlobalProvider;