import React, {useContext} from 'react';

// Context 
import ItemContext from '../context/itemContext';

const Alert = () => {

  const itemContext = useContext(ItemContext);
  const {alert} = itemContext
  return (
    alert &&
    <div className={`alert ${alert.type}`}>
      {alert.msg} <i className='fas fa-exclamation-triangle'></i>
    </div>
  )
}

export default Alert
