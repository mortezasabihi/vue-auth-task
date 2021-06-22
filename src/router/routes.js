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
    // component: () =>
    //   import(/* webpackChunkName: "Auth" */ "@/views/Auth/index.vue").default,
    meta: {
      layout: "AppAuthLayout",
    },
  },
  {
    path: "/auth/verify",
    name: "AuthVerify",
    component: () => require("@/views/Auth/Verify.vue").default,
    // component: () =>
    //   import(/* webpackChunkName: "AuthVerify" */ "@/views/Auth/Verify.vue"),
    meta: {
      layout: "AppAuthLayout",
    },
  },
  {
    path: "/auth/information",
    name: "AuthInformation",
    component: () => require("@/views/Auth/Information.vue").default,
    // component: () =>
    //   import(/* webpackChunkName: "AuthVerify" */ "@/views/Auth/Verify.vue"),
    meta: {
      layout: "AppAuthLayout",
    },
  },
  {
    path: "/auth/change-password",
    name: "AuthChangePassword",
    component: () => require("@/views/Auth/ChangePassword.vue").default,
    // component: () =>
    //   import(/* webpackChunkName: "AuthVerify" */ "@/views/Auth/Verify.vue"),
    meta: {
      layout: "AppAuthLayout",
    },
  },
];
