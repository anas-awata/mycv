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
    //console.log(this.$store.state.jobs[0]["title"]);
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
  height: 100vh;
  margin: 0;
  padding: 0;
  background: #fefefe;
}

body {
}

nav {
  background: ghostwhite;
  display: flex;
  justify-content: space-evenly;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    border-bottom-style: ridge;
    white-space: nowrap;
    border-bottom-width: thin;
    font-family: auto;
    background: #fff;
    width: 50%;
    padding: 5%;

    &.router-link-exact-active {
      color: #42b983;
      border-bottom-width: medium;
      border-color: #42b983;
      background: rgb(209, 255, 212);
      background: radial-gradient(
        circle,
        rgba(209, 255, 212, 0.17718837535014) 0%,
        rgba(230, 255, 234, 0.1295693277310925) 100%
      );
      width: 50%;
      padding: 5%;
    }
  }
}
.vacp-color-input-group,
.vacp-format-switch-button,
.vacp-copy-button {
  display: none !important;
}
.vacp-color-picker {
  background: #444 !important;
  border-radius: 30px;
  position: fixed;
  width: 80%;
  color: #fefefe;
}
.vacp-color-space {
  border-radius: 30px 30px 5px 5px;
}
.form-title {
  white-space: nowrap;
}
input,
textarea {
  background-color: #eee !important;
}
@media (max-width: 768px) {
  .profile {
    border-left-style: none;
  }
  .top-fix {
    margin-top: 0;
    margin-right: 0 !important;
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
    padding: 0 !important;
    margin: 0 !important;
    min-height: 100% !important;
    page-break-after: avoid;
  }
  .theme-3-container {
    font-size: 18px !important;
    height: 100%;
  }
  .profile {
    padding-left: 40px;
  }
  @page {
    /*size: 297mm 420mm;*/
    size: A4;
    margin: 0;
    margin-bottom: -100px;
  }
}
</style>
