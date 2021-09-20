import {
  GET_ADDRESS_API_URL,
  DELETE_ADDRESS_API_URL,
} from "../../assets/apiConstants";
import { getConfig } from "../../assets/utils";

export function requestGetAddress() {
  return getConfig("get", GET_ADDRESS_API_URL);
}

export function requestDeleteAddress(id) {
  console.log('id', DELETE_ADDRESS_API_URL(id))
  return getConfig("delete", DELETE_ADDRESS_API_URL(id));
}
