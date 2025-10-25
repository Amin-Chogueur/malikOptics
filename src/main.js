import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import { VueQueryPlugin } from "@tanstack/vue-query";
import App from "./App.vue";
import router from "./router";
import Toast, { POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";

const options = {
  position: POSITION.TOP_CENTER,
  timeout: 3000,
  closeOnClick: true,
};

const app = createApp(App);
const pinia = createPinia();

pinia.use(piniaPluginPersistedstate);
app.use(VueQueryPlugin);
app.use(pinia);
app.use(Toast, options);
app.use(router);

app.mount("#app");
