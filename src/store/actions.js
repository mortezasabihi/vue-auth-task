import { setToken } from "@/plugins/axios";
import api from "@/services/auth";
import { PHONE_NUMBER, TOKEN } from "./state";
import {
  SET_LOADING,
  SET_STATUS,
  SET_PHONE_NUMBER,
  SET_TOKEN,
  SET_USER,
  SET_ERROR,
} from "./mutations";

export const CHECK_USER = "checkUser";
export const GET_NEW_VERIFY_CODE = "getNewVerifyCode";
export const CHECK_VERIFY_CODE = "checkVerifyCode";
export const ADD_PASSWORD = "addPassword";
export const LOGIN = "login";
export const GET_USER = "getUser";
export const LOGOUT = "logout";

export default {
  async [CHECK_USER]({ commit }, payload) {
    commit(SET_LOADING, true);

    const { data } = await api.checkUser(payload);

    commit(SET_STATUS, data.data);
    commit(SET_PHONE_NUMBER, payload.phone);

    commit(SET_LOADING, false);
  },
  async [GET_NEW_VERIFY_CODE]({ state }) {
    await api.newVerifyCode({ phone: state[PHONE_NUMBER] });
  },
  async [CHECK_VERIFY_CODE]({ state, commit }, payload) {
    commit(SET_LOADING, true);

    try {
      const { data } = await api.checkVerifyCode({
        phone: state[PHONE_NUMBER],
        code: payload,
      });

      commit(SET_STATUS, 1);
      commit(SET_TOKEN, data.data.token);
      commit(SET_USER, data.data.user);
      commit(SET_ERROR, null);

      setToken(data.data.token);

      localStorage.setItem("token", data.data.token);
      localStorage.setItem("user", data.data.user);
    } catch (error) {
      commit(SET_ERROR, error);
    }

    commit(SET_LOADING, false);
  },
  async [ADD_PASSWORD]({ commit, state }, payload) {
    commit(SET_LOADING, true);

    setToken(state[TOKEN]);

    await api.addPassword(payload);

    commit(SET_LOADING, false);
  },
  async [LOGIN]({ commit }, payload) {
    commit(SET_LOADING, true);

    try {
      const { data } = await api.login(payload);
      commit(SET_TOKEN, data.data.token);

      setToken(data.data.token);

      localStorage.setItem("token", data.data.token);
    } catch (error) {
      console.log(error.toString());
    }

    commit(SET_LOADING, false);
  },
  async [GET_USER]({ commit }) {
    const { data } = await api.getUser();

    commit(SET_USER, data.data.user);

    localStorage.setItem("user", data.data.user);
  },
  async [LOGOUT]({ commit }) {
    await api.logout();

    commit(SET_USER, null);
    commit(SET_TOKEN, null);

    localStorage.removeItem("user");
    localStorage.removeItem("token");
  },
};
