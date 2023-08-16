import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.css"; // Import Bootstrap CSS
import "bootstrap"; // Import Bootstrap JavaScript
import "./assets/styles.css"; // Import custom CSS

createApp(App).use(router).mount("#app");
