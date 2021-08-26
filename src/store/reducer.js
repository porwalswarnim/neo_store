import {LOGGED_IN, LOGGED_OUT, ADD_TO_CART} from '../../src/types'
const initialState = {
  cardData: [],
  isLoggedIn: false,
  // Item:0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGGED_IN:
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    case LOGGED_OUT:
      return {
        ...state,
        isLoggedIn: action.payload,
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
