import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);

app.mount("#app");

// @ts-expect-error: not aware of window here
window.env = import.meta.env;
