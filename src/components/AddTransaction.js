import React, { useState, useContext } from 'react';

// Context
import ItemContext from '../context/itemContext';

const AddTransaction = () => {

  const itemContext = useContext(ItemContext);

  const { addItem, setAlert } = itemContext;

  const [item, setItem] = useState({
    text: '',
    income: '',
    expenses: ''
  })

  const { text, income, expenses } = item;

  const onChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    

    if (text ==='' || (income === '' && expenses === '')) {
      setAlert('Fill in the fields', 'bg-danger');
      

    } else {

      addItem(text, parseInt(`-${expenses}`), parseInt(income));


    }

    setItem({
      text: '',
      expenses: '',
      income: ''
    })

  }

  return (
    <div>
      <h3 className='bottom-line'>Add New Transaction</h3>
      <form onSubmit={onSubmit} className='form-group'>
        <label htmlFor="text">Text</label>
        <input onChange={onChange} value={text} type="text" name="text" placeholder='Enter text...' />
        <div className='amountInputs'>
          <div className='inputFields'>
            <label htmlFor="income">Income Amount  <i style={{ color: 'rgb(103, 194, 67)' }} className="fas fa-plus-circle"></i></label>
            <input onChange={onChange} value={income} name='income' type="number" placeholder='Enter Amount' />
          </div>
          <div className='inputFields'>
            <label htmlFor="expenses">Expenses Amount <i style={{ color: 'red' }} className="fas fa-minus-circle"></i> </label>
            <input onChange={onChange} value={expenses} name='expenses' type="number" placeholder='Enter Amount' />
          </div>
        </div>
        <input type="submit" value="Add Transaction" />
      </form>
    </div>
  )
}

export default AddTransaction
