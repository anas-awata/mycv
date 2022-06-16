<template>
  <mynav />
  <div class="row mycontainer">
    <h2>Select Your Favourite Template</h2>
    <h5>you can change the colors of any tamplate later</h5>
    <div
      class="col-md-4 templates-container"
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
.mycontainer {
  margin: 10% 2% 0 2%;
}
.templates-container {
  margin-top: 2%;
}
img {
  box-shadow: 15px 15px 20px 0px rgba(0, 0, 0, 0.4);
  border-radius: 20px;
  width: 90%;
  height: 95%;
  opacity: 1;
  transition: opacity 0.1s linear;
  backface-visibility: hidden;
  cursor: pointer;
  border-style: solid;
  border-width: thin;
}
.middle {
  transition: 0.2s linear;
  opacity: 0;
  position: relative;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
  width: 30%;
  bottom: 47%;
  border-radius: 20px;
  cursor: pointer;
}
.templates-container:hover .image {
  opacity: 0.6;
  border-color: #04aa6d;
  border-width: 2px;
}
.templates-container:hover .middle {
  opacity: 1;
}

.text {
  background-color: #04aa6d;
  color: white;
  font-size: 16px;
  padding: 5% 15%;
  border-radius: 10px;
}
h2 {
  font-family: serif;
  font-weight: bold;
}
h5 {
  font-family: "system-ui";
}
@media screen and (max-width: 768px) {
  .templates-container {
    width: 85%;
    max-width: 90%;
    padding-right: 0;
    padding-left: 0;
    margin-top: 10%;
    margin-left: auto;
    margin-right: auto;
  }
  .mycontainer {
    margin-top: 25%;
  }
}
</style>
