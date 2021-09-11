import {
  LOGGED_IN,
  LOGGED_OUT,
  ADD_TO_CART,
  LIST_PRODUCTS,
  ALL_ADDRESSES,
  ALL_ORDERS,
  IS_LOADING,
  IS_SEARCHING,
  IS_CONFIRMATION,
  SHOW_SNACKBAR
} from "../../src/types";

const initialState = {
  cardData: [],
  isLoggedIn: [],
  listProducts: [],
  addAddress: [],
  allOrders: [],
  isLoading: false,
  searchTerm: '',
  isConfirmation: {
    snackbarmessage: "",
    confirmationmessage: "",
    title: "",
    path: "",
    history: "",
    open: false,
  },
  snackbar: {
    message: "",
    open: false,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGGED_IN:
      return {
        ...state,
        isLoggedIn: [action.payload],
      };
    case LOGGED_OUT:
      return initialState;
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
    case ALL_ORDERS:
      return {
        ...state,
        allOrders: action.payload,
      };
    case IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
      case IS_SEARCHING:
      return {
        ...state,
        searchTerm: action.payload,
      };
    case IS_CONFIRMATION:
      return {
        ...state,
        isConfirmation: {
          confirmationmessage: action.payload.confirmationmessage,
          open: action.payload.open,
          title: action.payload.title,
          snackbarmessage: action.payload.snackbarmessage,
          path: action.payload.path,
          history: action.payload.history,
        },
      };
    case SHOW_SNACKBAR:
      return {
        ...state,
        snackbar: {
          message: action.payload.message,
          open: action.payload.open,
          type: action.payload.type,
        },
      };
  }

  return state;
};

export default reducer;
