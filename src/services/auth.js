import http from "@/plugins/axios";

export default {
  checkUser(form) {
    return http.post("/user/check", form);
  },
  checkVerifyCode(form) {
    return http.post("/user/verify", form);
  },
  newVerifyCode(form) {
    return http.post("/user/resend/code", form);
  },
  addPassword(form) {
    return http.post("/user/add-password", form);
  },
  login(form) {
    return http.post("/user/login", form);
  },
  changePassword(form) {
    return http.post("/user/change-password", form);
  },
  getUser() {
    return http.get("/user/get-user");
  },
  logout() {
    return http.get("/user/logout");
  },
};
