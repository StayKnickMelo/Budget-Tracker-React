import React, { useContext } from 'react';
import PropTypes from 'prop-types'

// Context
import ItemContext from '../context/itemContext';

const TransactionItem = ({ item }) => {

  const itemContext = useContext(ItemContext);

  const { deleteItem } = itemContext;

  const onClick = () => {

    deleteItem(item.id);


  }

  if(item.expenses){
    return (<li id='item' style={{width: '700px'}} >
      <div style={{width: '82%'}} className='list-item'>
        {item.text} <span className='minus'>{item.expenses}</span> <button className='btn-delete' onClick={onClick}>x</button>
      </div>
    </li>)
  }else {
    return (<li id='item' style={{ width: '700px' }} >
      <div style={{ width: '82%' }} className='list-item'>
        {item.text} <span className='plus'>{item.income}</span> <button className='btn-delete' onClick={onClick}>x</button>
      </div>
    </li>)

  }

}
  

export default TransactionItem

TransactionItem.propTypes = {
  item: PropTypes.object.isRequired,
}
