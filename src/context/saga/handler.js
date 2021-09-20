import { call, put } from "redux-saga/effects";
import { getAddress, setAddress } from "../store/userReducer";
import { requestGetAddress, requestDeleteAddress } from "./request";

export function* handleGetAddress() {
  try {
    const response = yield call(requestGetAddress);
    const data = response.data.data.address;
    yield put(setAddress(data));
  } catch (error) {
    console.log("error requestGetAddress", error);
  }
}

export function* handleDeleteAddress(action) {
  try {
    const res = yield call(requestDeleteAddress, action.payload);
  } catch (error) {
    console.log("error requestDeleteAddress", error);
  }
}
