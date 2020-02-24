import React, { useContext } from 'react';

// Context 
import ItemContext from '../context/itemContext';

const IncomeExpense = () => {


  const itemContext = useContext(ItemContext);

  const { items } = itemContext;

  let income = 0;
  let expense = 0;


  items.forEach(item => {
    if(item.income && !isNaN(item.income)){
      income += item.income
    } else if(item.expenses && !isNaN(item.expenses)){
      expense += item.expenses

    }
  })

  expense = expense.toString().split('-')[1];

  if(expense === undefined){
    expense = 0
  }

  return (
    <div className='card'>
      <div className='card-content income'>
        <h2>INCOME</h2>
        <h3 className='text-success badge'>{`$${income}`}</h3>
      </div>
      <div className='split-line'></div>
      <div className='card-content expenses'>
        <h2>EXPENSES</h2>
  <h3 className='text-danger badge'>{`$${expense}`}</h3>
      </div>
    </div>
  )
}

export default IncomeExpense
