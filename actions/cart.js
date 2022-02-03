import { actionTypes } from "./actionTypes";

export const addProductToCart = amiibo => {
  return {
    type: actionTypes.ADD_PRODUCT_TO_CART,
    amiibo
  };
};

export const removeProductFromCart = amiibo => {
  return {
    type: actionTypes.REMOVE_PRODUCT_FROM_CART,
    amiibo
  };
};
