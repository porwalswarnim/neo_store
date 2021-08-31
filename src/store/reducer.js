import {
  LOGGED_IN,
  ADD_TO_CART,
  LIST_PRODUCTS,
} from "../../src/types";

const initialState = {
  cardData: [],
  isLoggedIn: [],
  listProducts: [],
};

const reducer = (state = initialState, action) => {
  console.log('action', action)
  switch (action.type) {
    case LOGGED_IN:
      return {
        ...state,
        isLoggedIn: [action.payload],
      };
    case LIST_PRODUCTS:
      return {
        ...state,
        listProducts: [...action.payload],
      };
    case ADD_TO_CART:
      return {
        ...state,
        cardData: [...state.cardData, action.payload],
      };
  }

  return state;
};

export default reducer;
