import { ADD_ITEM, DELETE_ITEM, SET_ALERT, REMOVE_ALERT, LOAD_ITEMS} from "./types"

const itemReducer = (state, action)=> {
  switch(action.type){
    case LOAD_ITEMS:
      return{
        ...state,
        items: localStorage.getItem('items')
      }
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload]
      }
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      }
    case SET_ALERT: 
      return {
        ...state,
        alert: action.payload
      }
    
    case REMOVE_ALERT: 
      return {
        ...state,
        alert:null
      }
    
    default:
      return state
  }

}

export default itemReducer;