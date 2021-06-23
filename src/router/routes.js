import store from "@/store";
import { TOKEN } from "@/store/state";

export default [
  {
    path: "/",
    name: "Home",
    component: require("@/views/Home.vue").default,
    meta: {
      layout: "AppLayoutDefault",
    },
  },
  {
    path: "/auth",
    name: "Auth",
    component: require("@/views/Auth/index.vue").default,
    meta: {
      layout: "AppAuthLayout",
    },
    beforeEnter: () => {
      if (store.state[TOKEN]) return false;
    },
  },
  {
    path: "/auth/verify",
    name: "AuthVerify",
    component: () => require("@/views/Auth/Verify.vue").default,
    meta: {
      layout: "AppAuthLayout",
    },
    beforeEnter: (to, from) => {
      if (from.name !== "Auth") return false;
    },
  },
  {
    path: "/auth/information",
    name: "AuthInformation",
    component: () => require("@/views/Auth/Information.vue").default,
    meta: {
      layout: "AppAuthLayout",
    },
    beforeEnter: (to, from) => {
      if (from.name !== "AuthVerify") return false;
    },
  },
  {
    path: "/auth/login",
    name: "AuthLogin",
    component: () => require("@/views/Auth/Login.vue").default,
    meta: {
      layout: "AppAuthLayout",
    },
    beforeEnter: (to, from) => {
      if (from.name !== "Auth") return false;
    },
  },
  {
    path: "/auth/reset-password",
    name: "AuthResetPassword",
    component: () => require("@/views/Auth/ResetPassword.vue").default,
    meta: {
      layout: "AppAuthLayout",
    },
    beforeEnter: (to, from) => {
      if (from.name !== "AuthLogin") return false;
    },
  },
];
