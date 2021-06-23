import {
  LOADING,
  LOGGED_IN,
  STATUS,
  TOKEN,
  USER,
  PHONE_NUMBER,
  ERROR,
} from "./state";

export const SET_LOADING = "setLoading";
export const SET_LOGGED_IN = "setLoggedIn";
export const SET_STATUS = "setStatus";
export const SET_TOKEN = "setToken";
export const SET_USER = "setUser";
export const SET_PHONE_NUMBER = "setPhoneNumber";
export const SET_ERROR = "setError";

export default {
  [SET_LOADING](state, payload) {
    state[LOADING] = payload;
  },
  [SET_LOGGED_IN](state, payload) {
    state[LOGGED_IN] = payload;
  },
  [SET_STATUS](state, payload) {
    state[STATUS] = payload;
  },
  [SET_TOKEN](state, payload) {
    state[TOKEN] = payload;
  },
  [SET_USER](state, payload) {
    state[USER] = payload;
  },
  [SET_PHONE_NUMBER](state, payload) {
    state[PHONE_NUMBER] = payload;
  },
  [SET_ERROR](state, payload) {
    state[ERROR] = payload;
  },
};
