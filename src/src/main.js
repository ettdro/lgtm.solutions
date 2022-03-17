import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/index.css";

// Components imports
import WordSelector from "@/components/WordSelector.vue";

// Fontawesome
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(fas);
dom.watch();

const app = createApp(App);

/* add font awesome icon component */
app.component("font-awesome-icon", FontAwesomeIcon);

app.use(router);

app.component("WordSelector", WordSelector);

app.mount("#app");
