<template>
  <mynav />
  <div class="row">
    <div
      class="col-md-4 container"
      v-for="template in Object.keys(templatesShow)"
      :key="template"
      @click="showTemplate(this.$store.state.templatesShow, template)"
    >
      <router-link to="/pdf" custom v-slot="{ navigate }">
        <img
          :src="require(`../pics/${template}.jpeg`)"
          :alt="template"
          @click="navigate"
          role="link"
          class="image"
        />
      </router-link>
      <div class="middle">
        <div class="text">Select</div>
      </div>
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
    templatepic(pic) {
      var direc = pic + ".jpeg";
      return direc;
    },
  },
  components: { mynav },
  computed: {},
};
</script>

<style lang="scss" scoped>
img {
  box-shadow: 15px 15px 20px 0px rgba(0, 0, 0, 0.4);
  border-radius: 20px;
  width: 80%;
  height: 80%;
  margin-top: 40%;
  opacity: 1;
  transition: 0.2s linear;
  backface-visibility: hidden;
  cursor: pointer;
}
.middle {
  transition: 0.2s linear;
  opacity: 0;
  position: relative;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
  width: 50%;
  bottom: 40%;
  border-radius: 20px;
  cursor: pointer;
}
.container:hover .image {
  opacity: 0.5;
}

.container:hover .middle {
  opacity: 1;
}

.text {
  background-color: #04aa6d;
  color: white;
  font-size: 16px;
  padding: 16px 32px;
  border-radius: 70px;
}
html {
  background: #eee !important;
}
</style>
