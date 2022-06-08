<template>
  <div>
    <fieldset class="form-section">
      <div class="expansion-panel-header">
        <div
          class="expansion-panel-title"
          @click="this.studyhidden = !this.studyhidden"
        >
          <h4 class="form-title">
            <i class="fa-solid fa-university"> </i>study Information
          </h4>
          <button id="expansionPanelPersonal" type="button" class="col-1">
            <i class="fa-solid fa-angle-down"> </i>
          </button>
        </div>
      </div>
      <div class="work-container" :class="{ studyopen: !studyhidden }">
        <div>
          <button
            v-if="studies.length < 3"
            @click="pushstudy"
            class="btn btn-success"
          >
            add new study
            <i class="fa-solid fa-plus"> </i>
          </button>
          <component
            v-for="(study, index) in studies"
            :key="index"
            :studies="studies"
            :is="study.data"
            :index="index"
            :deletestudy="deleteMystudy"
          >
          </component>
        </div>
      </div>
    </fieldset>
  </div>
</template>

<script>
import { mapMultiRowFields } from "vuex-map-fields";
import studyItem from "./studyItems.vue";
export default {
  name: "study-selector",
  components: { studyItem },
  data() {
    return {
      studyhidden: true,
      //studies: [{ data: "studyItem" }],
      /*desc: "",
      university: "",
      Location: "",
      From: "",
      To: "",*/
    };
  },
  methods: {
    pushstudy() {
      //this.studies.push({ data: "studyItem" });
      this.$store.commit("settingstudy");
      this.$store.commit("updatestudies");
    },
    deleteMystudy(index) {
      this.$store.commit("deletestudies", index);
      this.$store.commit("deletestudy", index);
      console.log(index);
      console.log(this.studies);
    },
  },
  computed: {
    ...mapMultiRowFields(["studies"]),
  },
  updated() {
    console.log("selectormount");
  },
};
</script>

<style lang="scss" scoped>
li {
  list-style: none;
}
.work-container {
  display: none;
  background-color: #fff;
  margin-bottom: 20px;
}
.studyopen {
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
.form-title {
  display: inline;
  padding: 10px;
  margin-left: 2.5rem;
  white-space: nowrap;
}
.expansion-panel-title {
  display: flex;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  cursor: pointer;
  margin-bottom: 1px;
}
.expansion-panel-title {
  background-color: #fff;
}
#expansionPanelPersonal {
  display: inline;
  align-self: center;
  border-radius: 8px;
  padding: 0px;
  border: none;
  background-color: #fff;
}
label {
  display: table;
  margin-left: 10px;
  margin-top: 5px;
  margin-bottom: 2px;
  font-size: 18px;
}
.form-title svg {
  margin-right: 10px;
}
</style>
