import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { createApp } from "vue";
import { createPinia } from "pinia";

import "./fontAwesome";
import App from "./App.vue";
import { useToastStore } from ".";

const app = createApp(App);

app.use(createPinia());

app.config.errorHandler = (e) => {
  console.error(e);

  const toasts = useToastStore();
  toasts.add({
    duration: 15 * 1000,
    fade: true,
    text: "An unexpected error has occurred. Please try again later or contact us if the issue persists.",
    title: "Error",
    variant: "danger",
  });
};

app.mount("#app");
