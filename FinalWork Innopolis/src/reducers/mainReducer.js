export const SET_AUTH = 'SET_AUTH';
export const SET_AUTH_DATA = 'SET_AUTH_DATA';
export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const QTY_UP = 'QTY_UP';
export const QTY_DOWN = 'QTY_DOWN';

export const initialState = {
    cartItems: [],
    user: [],
    id: localStorage.getItem('id'),
    token: localStorage.getItem('token')
}
const mainReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_AUTH_DATA:
            return {
                 ...state,
                 id: action.payload.id,
                 token: action.payload.token               
            }
        case SET_AUTH:
            return {
                ...state,
                isAuth: action.payload
            }
        case ADD_ITEM:
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]
            }
        case REMOVE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload)
            }
        case QTY_UP:
            return {
                ...state,
                cartItems: state.cartItems.map(item => {
                    if(item.id === action.payload){
                        return {
                            ...item,
                            quantity: item.quantity+1
                        }                
                    }
                    return item;
                })
            }
      case QTY_DOWN:
        return {
            ...state,
            cartItems: state.cartItems.map(item => {
                if(item.id === action.payload){
                    return {
                        ...item,
                        quantity: item.quantity-1
                    }
                }
                return item;                
            })
        }
        default:
            return state;            
    }
}

export default mainReducer;