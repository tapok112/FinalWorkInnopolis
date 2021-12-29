import { combineReducers} from 'redux';
import mainReducer, { ADD_ITEM, REMOVE_ITEM, SET_AUTH, SET_AUTH_DATA, QTY_DOWN, QTY_UP } from './mainReducer';

export default combineReducers({
    main: mainReducer
})

export const setAuthData = (payload) => {
    return ({type: SET_AUTH_DATA,
            payload: payload})
}
export const setAuth = (payload) => {
    return ({type: SET_AUTH,
            payload: payload})
}
export const addInListOfItems = (payload) => {
    return ({type: ADD_ITEM,
            payload: payload})
}
export const removeFromListOfItems = (payload) => {
    return ({type: REMOVE_ITEM,
            payload: payload})
}
export const quantityUp = (payload) => {
    return ({type: QTY_UP,
             payload: payload
            })
  }
export const quantityDown = (payload) => {
  return ({type: QTY_DOWN,
           payload: payload
        })
}