import {delay} from "redux-saga/effects";
import { takeLatest, put } from "redux-saga/effects";

function* ageUpAsync() {
  yield delay(4000);
  console.log("in")
  yield put({ type: "AGE_UP_ASYNC", value: 1 });
}

export function* watchAgeUp() {
  yield takeLatest("AGE_UP", ageUpAsync);
}