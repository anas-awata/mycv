<template>
  <mynav />
  <div class="row">
    <div
      class="col-md-4"
      v-for="template in Object.keys(templatesShow)"
      :key="template"
      @click="showTemplate(this.$store.state.templatesShow, template)"
    >
      <router-link to="/pdf" custom v-slot="{ navigate }">
        <img
          src="https://images.creativemarket.com/0.1.0/ps/6637665/2500/2500/m1/fpnw/wm0/01_clean-professional-creative-and-modern-resume-cv-curriculum-vitae-design-template-ms-word-apple-pages-psd-free-download-.jpg?1562417337&s=f9aaf2025d1fd63a6fc7e6e809d9b448"
          :alt="template"
          @click="navigate"
          role="link"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
import mynav from "../components/myNav.vue";
export default {
  name: "my-template",
  data() {
    return {
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
  methods: {
    showTemplate(obj, template) {
      Object.keys(obj).forEach((key) => {
        obj[key] = false;
      });
      // eslint-disable-next-line
      obj[template] = true;
      console.log(obj);
      console.log(template);
      this.$store.commit("settingcvtemplate", obj);
    },
  },
  components: { mynav },
};
</script>

<style lang="scss" scoped>
img {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  border-radius: 20px;
  width: 80%;
  height: 80%;
  margin-top: 50%;
}
</style>
