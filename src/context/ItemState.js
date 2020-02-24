import React, { useReducer } from 'react';
import ItemContext from './itemContext';
import ItemReducer from './itemReducer';

import uuid from 'uuid';

import { ADD_ITEM, DELETE_ITEM, SET_ALERT, REMOVE_ALERT} from './types';



const ItemState = (props) => {

  const initialState = {
    items: JSON.parse(localStorage.getItem('items')),
    alert: null
  }

  const [state, dispatch] = useReducer(ItemReducer, initialState);

  // Add item

  const addItem = (text, expenses, income) => {

    const id = uuid.v4();

    dispatch({
      type: ADD_ITEM,
      payload: { text, expenses, income, id }
    });

    let items;
    if (localStorage.getItem('items') === null) {
      items = []
    } else {
      items = JSON.parse(localStorage.getItem('items'));
    }

    items.push({ text, expenses, income, id })
    localStorage.setItem('items', JSON.stringify(items));

  }

  // Remove Item

  const deleteItem = (id) => {

    dispatch({
      type: DELETE_ITEM,
      payload: id
    });


    let items = JSON.parse(localStorage.getItem('items'));

    items.forEach((item, index) => {
      if (item.id === id) {
        items.splice(index, 1)
      }
    });

    localStorage.setItem('items', JSON.stringify(items));

  }

  const setAlert = (msg, type) => {

    dispatch({
      type: SET_ALERT,
      payload: { msg, type }
    });


    setTimeout(() => {
      dispatch({
        type: REMOVE_ALERT
      })
    }, 3000)

  }




  return (
    <ItemContext.Provider
      value={{
        items: state.items,
        alert: state.alert,
        addItem,
        deleteItem,
        setAlert,
      }}>
      {props.children}
    </ItemContext.Provider>
  )

}

export default ItemState;