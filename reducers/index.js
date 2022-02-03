import { actionTypes } from "../actions/actionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_PRODUCT_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.amiibo]
      }
    case actionTypes.REMOVE_PRODUCT_FROM_CART:
        
      return {
        ...state,
        cart: state.cart.filter( (items) => {
            return items.tail != action.amiibo.tail;
        })
      }
    default:
      return state;
  }
};