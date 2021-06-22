import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "vazir-font/dist/Farsi-Digits/font-face-FD.css";
import "@/assets/tailwind.css";

createApp(App).use(store).use(router).mount("#app");
