import { takeEvery, takeLatest } from "redux-saga/effects";
import { GET_ADDRESS, DELETE_ADDRESS } from "../store/userReducer";
import { handleGetAddress, handleDeleteAddress } from "./handler";

export function* watcherSaga() {
  yield takeEvery(GET_ADDRESS, handleGetAddress);
  yield takeEvery(DELETE_ADDRESS, handleDeleteAddress);
}
