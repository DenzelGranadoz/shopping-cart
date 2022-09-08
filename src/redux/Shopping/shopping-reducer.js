import * as actionTypes from './shopping-types';

const INITIAL_STATE = {
  products: [], // id, title, price, desc, img
  cart: [], // id, title, price, desc, img, qty
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return {};
    case actionTypes.REMOVE_FROM_CART:
      return {};
    case actionTypes.ADJUST_QTY:
      return {};
    default:
      return state;
  }
};

export default shopReducer;
