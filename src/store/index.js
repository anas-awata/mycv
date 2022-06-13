import { createStore } from "vuex";
import { getField, updateField } from "vuex-map-fields";

export default createStore({
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
      courses: [{ data: "coursesItem" }, { data: "coursesItem" }],
      course: [
        {
          coursetitle: "Vue js course",
          platform: "net ninja",
          location: "Online",
          from: "2020-01-01",
          to: "2022-01-01",
          disc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a elit facilisis, adipiscing leo in, dignissim magna.",
        },
        {
          coursetitle: "Vue js course",
          platform: "net ninja",
          location: "Online",
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
      templatesShow: {
        themeone: false,
        themetwo: false,
        themethree: false,
        themefour: false,
        themefive: false,
        themesix: true,
      },
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
    settingcourse(state) {
      state.course.push({
        coursetitle: "Vue js course",
        platform: "net ninja",
        location: "Online",
        from: "2020-01-01",
        to: "2022-01-01",
        disc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a elit facilisis, adipiscing leo in, dignissim magna.",
      });
    },
    updatecourses(state) {
      state.courses.push({ data: "coursesItem" });
    },
    deletecourses(state, payload) {
      state.courses.splice(payload, 1);
    },
    deletecourse(state, payload) {
      state.course.splice(payload, 1);
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
    settingcvtemplate(state, payload) {
      state.templatesShow = payload;
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
