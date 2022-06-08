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

import { createStore } from "vuex";
import { getField, updateField } from "vuex-map-fields";

import VueHtmlToPaper from "./plugins/VueHtmlToPaper.js";
const options = {
  name: "_blank",
  speces: ["fullscreen=yes", "titlebar=yes", "scrollbars=yes"],
  styles: [
    "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
    "https://unpkg.com/kidlat-css/css/kidlat.css",
  ],
};
// Create a new store instance.
const store = createStore({
  state() {
    return {
      personal: {
        Fname: "anas",
        Lname: "parker",
        Jtitle: "Web Developer",
        Email: "j.anderson@gmail.com",
        Phone: "+34 123 456 789",
        Address: "Los Angeles, CA",
        About:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod congue nisi, nec consequat quam. In consectetur faucibus turpis eget laoreet. Sed nec imperdiet purus.",
      },
      social: {
        LinkedIn: "Ronaldo",
        Twitter: "Ronaldo",
        Instagram: "Ronaldo",
        Facebook: "Ronaldo",
        Github: "Ronaldo",
      },
      works: [{ data: "workItem" }, { data: "workItem" }],
      jobs: [
        {
          jobtitle: "front end",
          company: "microsoft",
          location: "us",
          from: "2020-01-01",
          to: "2022-01-01",
          disc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a elit facilisis, adipiscing leo in, dignissim magna.",
        },
        {
          jobtitle: "front end",
          company: "microsoft",
          location: "us",
          from: "2020-01-01",
          to: "2022-01-01",
          disc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a elit facilisis, adipiscing leo in, dignissim magna.",
        },
      ],
      studies: [{ data: "studyItem" }, { data: "studyItem" }],
      study: [
        {
          spec: "IT",
          university: "damascus",
          location: "Syria",
          from: "2020-01-01",
          to: "2022-01-01",
          disc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a elit facilisis, adipiscing leo in, dignissim magna.",
        },
        {
          spec: "IT",
          university: "damascus",
          location: "Syria",
          from: "2020-01-01",
          to: "2022-01-01",
          disc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a elit facilisis, adipiscing leo in, dignissim magna.",
        },
      ],
      skills: [
        "html",
        "css",
        "JavaScript",
        "Vue",
        "MySQL",
        "Ajax",
        "Microsoft Office",
      ],
      languages: [{ Arabic: "100" }, { English: "80" }, { Spanish: "40" }],
      headingColor: "#66cc99",
      cvColors: [{ firstcolor: "#fff", secondcolor: "#3d3e42" }],
    };
  },
  getters: {
    getField,
  },
  mutations: {
    updateField,
    settingjob(state) {
      state.jobs.push({
        jobtitle: "front end",
        company: "microsoft",
        location: "us",
        from: "2020-01-01",
        to: "2022-01-01",
        disc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a elit facilisis, adipiscing leo in, dignissim magna.",
      });
    },
    updateworks(state) {
      state.works.push({ data: "workItem" });
    },
    deletework(state, payload) {
      state.works.splice(payload, 1);
    },
    deletejob(state, payload) {
      state.jobs.splice(payload, 1);
    },
    updatestudies(state) {
      state.studies.push({ data: "studyItem" });
    },
    deletestudies(state, payload) {
      state.studies.splice(payload, 1);
    },
    deletestudy(state, payload) {
      state.study.splice(payload, 1);
    },
    settingstudy(state) {
      state.study.push({
        spec: "IT",
        university: "damascus",
        location: "Syria",
        from: "2020-01-01",
        to: "2022-01-01",
        disc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a elit facilisis, adipiscing leo in, dignissim magna.",
      });
    },
    settingskills(state, payload) {
      state.skills = payload;
    },
    settinglanguages(state, payload) {
      state.languages = payload;
    },
    settingheadingcolor(state, payload) {
      state.headingColor = payload;
    },
    settingcvcolorone(state, payload) {
      state.cvColors[0].firstcolor = payload;
    },
    settingcvcolortwo(state, payload) {
      state.cvColors[0].secondcolor = payload;
    },
    initialiseStore(state) {
      if (localStorage.getItem("store")) {
        this.replaceState(
          Object.assign(state, JSON.parse(localStorage.getItem("store")))
        );
        console.log(localStorage.getItem("store"));
      }
    },
  },
});

store.subscribe((mutation, state) => {
  console.log(mutation.type);
  localStorage.setItem("store", JSON.stringify(state));
  console.log(localStorage.getItem("store"));
});

const app = createApp(App).use(router).use(store).use(VueHtmlToPaper, options);
app.component("font-awesome-icon", fontAwesomeIcon);
app.config.globalProperties.emitter = emitter;
app.mount("#app");
