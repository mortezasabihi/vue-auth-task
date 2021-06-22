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
    component: require("@/views/Auth.vue").default,
    meta: {
      layout: "AppAuthLayout",
    },
  },
];
