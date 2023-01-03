import React from "react";

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PRODUCTS':
      return { ...state, products: action.payload };
    case 'ADD_TO_CART':
      return { ...state, cart: [{ ...action.payload }, ...state.cart] };
    case 'REMOVE_FROM_CART':
      return { ...state, cart: state.cart.filter(c => c.id !== action.payload.id) };
    case 'CHANGE_QRT':
      return { ...state, cart: state.cart.filter(c => c.id === action.payload.id ? c.qrt = action.payload.qrt : c.qrt)}
    default:
      break
  }
}

export default cartReducer