<template>
  <router-view />
</template>

<script>
//import home from "./views/Home.vue";
//import pdf from "./views/pdf.vue";
export default {
  components: {},
  mounted() {
    console.log(this.$store.state.personal["Fname"]);
    console.log(screen.width);
  },
  computed: {
    isMobile() {
      if (screen.width < 768) {
        console.log("t");
        return true;
      } else {
        console.log("f");
        return false;
      }
    },
  },
  beforeCreate() {
    this.$store.commit("initialiseStore");
    console.log(localStorage.getItem("store"));
    console.log(this.$store.state.jobs[0]["title"]);
  },
  updated() {
    console.log(localStorage.getItem("store"));
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #fff;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    padding: 10% 19.7%;
    border-bottom-style: ridge;
    white-space: nowrap;
    border-bottom-width: thin;
    font-family: auto;

    &.router-link-exact-active {
      color: #42b983;
      border-bottom-width: medium;
      border-color: #42b983;
      vertical-align: text-bottom;
      padding-bottom: 11%;
      background-color: aliceblue;
    }
  }
}
.nav-container {
  margin-top: 50px;
}
.vacp-color-input-group,
.vacp-format-switch-button,
.vacp-copy-button {
  display: none !important;
}
.cvselectorlink {
  margin-left: -11%;
}
.form-title {
  white-space: nowrap;
}
@media (max-width: 768px) {
  .profile {
    border-left-style: none;
  }
}
.else {
  margin-top: 90px;
}
@media print {
  .noprint {
    display: none;
  }
  html,
  body {
    height: 100%;
    width: 100%;
    margin: 0 !important;
    padding: 0 !important;
    overflow: hidden;
  }
  #content {
    display: block !important;
    width: 100% !important;
    height: 100% !important;
    margin-top: -10%;
    min-height: 100% !important;
    page-break-after: avoid;
  }
  .top-fix {
    margin-top: 0;
  }
  .theme-3-container {
    font-size: 18px !important;
    height: 100%;
  }
  @page {
    /*size: 297mm 420mm;*/
    size: A4;
    margin: 0;
    margin-bottom: -100px;
  }
}
</style>
