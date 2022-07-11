import React, { useState } from 'react'
import './App.css';
import Balance from './components/Balance';
import Header from './components/Header';
import Account from './components/Account';
import TrasactionHistory from './components/TrasactionHistory';
import AddTransaction from './components/AddTransaction';
import GlobalProvider from './context/contextApi';
function App() {
  // app theme..
  const [dark, setDark] = useState(false);
  const handleMode = (mode)=>{
    setDark(mode);
  }; 
  return (
    <>
    <GlobalProvider>
          <Header dark={dark} handleMode={handleMode}/>
     <div className={`${dark? 'wrapperDark' : 'wrapper'}`}>
          <Balance/>
          <Account/>
          <TrasactionHistory />
          <AddTransaction/>
     </div>
    </GlobalProvider>
    </>
  );
}

export default App;
