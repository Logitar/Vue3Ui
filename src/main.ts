import { createApp } from "vue";

import App from "@/App.vue";
import fontAwesome from "@/fontAwesome";
import router from "@/router";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const app = createApp(App);

app.use(fontAwesome);
app.use(router);

app.mount("#app");
