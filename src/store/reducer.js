import {
  LOGGED_IN,
  ADD_TO_CART,
  LIST_PRODUCTS,
  ALL_ADDRESSES,
  ALL_ORDERS,
} from "../../src/types";

const initialState = {
  cardData: [],
  isLoggedIn: [],
  listProducts: [],
  addAddress:[],
  allOrders:[],
};

const reducer = (state = initialState, action) => {
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
    case ALL_ADDRESSES:
      return {
        ...state,
        addAddress: [...action.payload],
      };
    case ADD_TO_CART:
      return {
        ...state,
        cardData: action.payload,
      };
      case ALL_ORDERS:
      return {
        ...state,
        allOrders: action.payload,
      };
  }

  return state;
};

export default reducer;
