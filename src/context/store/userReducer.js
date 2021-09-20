export const GET_ADDRESS = "GET_ADDRESS";
export const SET_ADDRESS = "SET_ADDRESS";
export const DELETE_ADDRESS = "DELETE_ADDRESS";
export const DELETE_ADDRESS_SUCCESSED = " DELETE_ADDRESS_SUCCESSED "

export const getAddress = () => ({
  type: GET_ADDRESS,
});

export const setAddress = (data) => ({
  type: SET_ADDRESS,
  payload: data,
});

export const deleteAddress = (id) => ({
  type: DELETE_ADDRESS,
  payload: id
});
export const deleteAddressSuccessed = (id) => ({
  type: DELETE_ADDRESS_SUCCESSED,
  payload: id
});

const initialState = {
  address: [],
};

const userReducer = (state = initialState, action) => {
  console.log("4 - action", action);
  switch (action.type) {
    case SET_ADDRESS:
      const { payload } = action;
      return { ...state, address: payload };
      case DELETE_ADDRESS:
        return { ...state };
    default:
      return state;
  }
};

export default userReducer;
