import React, {useContext} from 'react';

import ItemContext from '../context/itemContext';

import TransactionItem from './TransactionItem';


const TransactionList = () => {

  const itemContext = useContext(ItemContext);
  const { items } = itemContext;


  return (
    <div>
      <h3 className="bottom-line">History</h3>
      <ul>
        {items.length > 0 ? items.map(item => (
          <TransactionItem key={item.id} item={item} />
        )) : <h2 className='empty'>You have no transactions yet</h2>}
      </ul>
    </div>
  )
}

export default TransactionList


// {
// items.length > 0 && items.map(item => (
//   <TransactionItem key={item.id} item={item} />
// ))
// }