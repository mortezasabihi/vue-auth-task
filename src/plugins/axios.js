import axios from "axios";

const http = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

export default http;

export const setToken = (token) => {
  http.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

if (localStorage.getItem("token")) {
  setToken(localStorage.getItem("token"));
}
