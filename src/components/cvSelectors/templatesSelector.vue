<template>
  <fieldset class="form-section">
    <div class="expansion-panel-header">
      <div class="expansion-panel-title" @click="this.hidden = !this.hidden">
        <h4 class="form-title"><i class="fas fa-palette"></i>Templates</h4>
        <i class="fa-solid fa-angle-down col-1"> </i>
      </div>
    </div>
    <div class="container" :class="{ open: !hidden }">
      <button @click="showTemplate(templatesShow, 'themeone')">theme1</button>
      <button @click="showTemplate(templatesShow, 'themetwo')">theme2</button>
      <button @click="showTemplate(templatesShow, 'themethree')">theme3</button>
      <button @click="showTemplate(templatesShow, 'themefour')">theme4</button>
      <button @click="showTemplate(templatesShow, 'themefive')">theme5</button>
      <button @click="showTemplate(templatesShow, 'themesix')">theme6</button>
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
</style>
