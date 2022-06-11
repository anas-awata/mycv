<template>
  <mynav />
  <div v-if="isMobile" class="nav-container">
    <nav>
      <router-link class="cvselectorlink col-6" to="/pdf"
        >CV Selector
      </router-link>
      <router-link class="col-6" to="/cvpage"> View CV</router-link>
    </nav>
  </div>
  <div class="container">
    <design-color />
    <theme3 />
  </div>
</template>

<script>
import mynav from "../components/myNav.vue";
//import theme2 from "../components/theme2/theme2.vue";
import theme3 from "../components/theme3/theme3.vue";
import designColor from "../components/cvSelectors/designColor.vue";
export default {
  name: "cv-page",
  components: { theme3, designColor, mynav },
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
};
</script>
<style scoped>
.container {
  margin-top: 35%;
  border-style: none;
  color: #eee;
}
.nav-container {
  background-color: ghostwhite;
  position: fixed;
  top: 49px;
  width: 100%;
  z-index: 1000;
}
</style>
