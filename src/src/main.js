import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/index.css";

import WordSelector from "@/components/WordSelector.vue";

const app = createApp(App);

app.use(router);

app.component("WordSelector", WordSelector);

app.mount("#app");
