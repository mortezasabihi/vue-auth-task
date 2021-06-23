export const LOADING = "loading";
export const LOGGED_IN = "loggedIn";
export const STATUS = "status";
export const TOKEN = "token";
export const USER = "user";
export const PHONE_NUMBER = "phoneNumber";
export const ERROR = "error";

export default () => ({
  [LOADING]: false,
  [STATUS]: 0,
  [LOGGED_IN]: false,
  [TOKEN]: localStorage.getItem("token") || null,
  [USER]: localStorage.getItem("user") || null,
  [PHONE_NUMBER]: null,
  [ERROR]: null,
});
