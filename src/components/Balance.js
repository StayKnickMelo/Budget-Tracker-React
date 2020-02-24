import React, {useContext} from 'react';

import ItemContext from '../context/itemContext';

const Balance = () => {

  const itemContext = useContext(ItemContext);

  const { items } = itemContext;



  let total = 0;

  items.forEach(item => {
    if (!isNaN(item.expenses) && item.expenses !== null  ){
      total += item.expenses 
    } else if (!isNaN(item.income) && item.income !== null ){
      total += item.income
    }
  })


  return (
    <div>
      <h4 style={style}>Your Balance</h4>
      <h1 style={style}>{`$${total}`}</h1>
    </div>
  )
}

export default Balance


const style = {
  padding: '.5rem'
}