import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import diy from "./diy";
const app = createApp(App);

app.provide("diy", diy);

app.use(router);

app.mount("#app");
