import axios from "axios";

export function getConfig(method, url, data) {
  return axios.request({
    method,
    url,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
    data,
  });
}
