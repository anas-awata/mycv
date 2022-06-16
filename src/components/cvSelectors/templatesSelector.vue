<template>
  <fieldset class="form-section">
    <div class="expansion-panel-header">
      <div class="expansion-panel-title" @click="this.hidden = !this.hidden">
        <h4 class="form-title"><i class="fas fa-align-left"></i>Templates</h4>
        <div class="col-1 icon" :class="{ nothidden: !hidden }">
          <i class="fa-solid fa-angle-down"> </i>
        </div>
      </div>
    </div>
    <div class="container" :class="{ open: !hidden }">
      <div
        class="imgContainer"
        @click="showTemplate(templatesShow, 'themeone')"
      >
        <img src="../../pics/themeone.jpeg" alt="theme1" />
      </div>
      <div
        class="imgContainer"
        @click="showTemplate(templatesShow, 'themetwo')"
      >
        <img src="../../pics/themetwo.jpeg" alt="theme2" />
      </div>
      <div
        class="imgContainer"
        @click="showTemplate(templatesShow, 'themethree')"
      >
        <img src="../../pics/themethree.jpeg" alt="theme3" />
      </div>
      <div
        class="imgContainer"
        @click="showTemplate(templatesShow, 'themefour')"
      >
        <img src="../../pics/themefour.jpeg" alt="theme4" />
      </div>
      <div
        class="imgContainer"
        @click="showTemplate(templatesShow, 'themefive')"
      >
        <img src="../../pics/themefive.jpeg" alt="theme5" />
      </div>
      <div
        class="imgContainer"
        @click="showTemplate(templatesShow, 'themesix')"
      >
        <img src="../../pics/themesix.jpeg" alt="theme6" />
      </div>
    </div>
  </fieldset>
</template>

<script>
export default {
  name: "templates-selector",
  data() {
    return {
      hidden: true,
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
      this.$store.commit("settingcvtemplate", obj);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: none;
  margin-bottom: 20px;
  margin-top: 7%;
}
.open {
  display: block;
  animation: growDown 0.5s ease-in-out forwards;
  transform-origin: top center;
}
@keyframes growDown {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
#expansionPanelPersonal {
  display: inline;
  align-self: center;
  border-radius: 8px;
  padding: 0px;
  border: none;
}
#expansionPanelPersonal:hover,
#expansionPanelPersonal:active,
#expansionPanelPersonal:focus {
  border: none;
}
.form-title {
  display: inline;
  padding: 10px;
  margin-left: 2.5rem;
}
.expansion-panel-title {
  display: flex;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  cursor: pointer;
  margin-bottom: 1px;
  align-items: center;
}
.expansion-panel-title:hover {
  background-color: #333;
  transition: background-color 0.3s ease-in-out;
}
svg {
  margin-right: 10px;
}
.form-section {
  margin-top: 7%;
}
.nothidden {
  transform: rotate(180deg) translate(15px, 0px);
  transition: all 0.25s ease 0s;
  margin-right: 4px !important;
}
.icon {
  margin-right: 10px;
}
img {
  width: 90%;
  margin-bottom: 5%;
  transition: 0.2s linear;
  cursor: pointer;
  border-radius: 20px;
  border-style: solid;
  border-width: 2px;
  border-color: #04aa6d;
}
img:hover {
  opacity: 0.5;
}
</style>
