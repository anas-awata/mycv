import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
//import vueiframe, { VueIframe } from "vue-iframes";
//import { html2canvas } from "html2canvas";
import "./css/global.css";
//import vueHtml2canvas from "vue-html2canvas";
import "@babel/polyfill";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { dom } from "@fortawesome/fontawesome-svg-core";
library.add(fas, fab);
dom.watch();
import mitt from "mitt";
const emitter = mitt();
import VueHtmlToPaper from "./plugins/VueHtmlToPaper.js";
const options = {
  name: "_blank",
  speces: ["fullscreen=yes", "titlebar=yes", "scrollbars=yes"],
  styles: [
    "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
    "https://unpkg.com/kidlat-css/css/kidlat.css",
  ],
};

import store from "./store";

store.subscribe((mutation, state) => {
  console.log(mutation.type);
  localStorage.setItem("store", JSON.stringify(state));
  console.log(localStorage.getItem("store"));
});

const app = createApp(App).use(router).use(store).use(VueHtmlToPaper, options);
app.component("font-awesome-icon", fontAwesomeIcon);
app.config.globalProperties.emitter = emitter;
app.mount("#app");
