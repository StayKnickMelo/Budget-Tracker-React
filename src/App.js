import React from 'react';
import './App.css';

// Components
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import Alert from './components/Alert';

// State
import ItemState from './context/ItemState';

function App() {
  return (
    <div >
      <Header />
      <div className='container'>
        <ItemState>
          <Alert />
          <Balance />
          <IncomeExpense />
          <TransactionList />
          <AddTransaction />
        </ItemState>
      </div>
    </div>
  );
}

export default App;
