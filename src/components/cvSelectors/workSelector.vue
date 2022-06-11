<template>
  <div>
    <fieldset class="form-section">
      <div class="expansion-panel-header">
        <div
          class="expansion-panel-title"
          @click="this.workhidden = !this.workhidden"
        >
          <h4 class="form-title">
            <i class="fa-solid fa-suitcase"> </i>Experience
          </h4>
          <i class="fa-solid fa-angle-down col-1"> </i>
        </div>
      </div>
      <div class="work-container" :class="{ open: !workhidden }">
        <div>
          <button
            v-if="works.length < 3"
            @click="pushWork"
            class="btn btn-success"
          >
            add new work
            <i class="fa-solid fa-plus"> </i>
          </button>
          <component
            v-for="(work, index) in works"
            :key="index"
            :works="works"
            :is="work.data"
            :index="index"
            :deleteWork="deleteMyWork"
          >
          </component>
        </div>
      </div>
    </fieldset>
  </div>
</template>

<script>
import { mapMultiRowFields } from "vuex-map-fields";
import workItem from "./workItems.vue";
export default {
  name: "work-selector",
  components: { workItem },
  data() {
    return {
      workhidden: true,
      //works: [{ data: "workItem" }, { data: "workItem" }],
      /*Jobtitle: "",
      Company: "",
      Location: "",
      From: "",
      To: "",*/
    };
  },
  methods: {
    pushWork() {
      //this.works.push({ data: "workItem" });
      this.$store.commit("settingjob");
      this.$store.commit("updateworks");
    },
    deleteMyWork(index) {
      this.$store.commit("deletework", index);
      this.$store.commit("deletejob", index);
      console.log(index);
      console.log(this.works);
    },
  },
  updated() {
    console.log("selectormount");
  },
  computed: {
    ...mapMultiRowFields(["works"]),
  },
  mounted() {
    console.log(this.works);
    console.log(this.works[0].data);
  },
};
</script>

<style lang="scss" scoped>
li {
  list-style: none;
}
.work-container {
  display: none;
  margin-bottom: 20px;
  margin-right: 5%;
  margin-left: 5%;
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
#expansionPanelPersonal {
  display: inline;
  align-self: center;
  border-radius: 8px;
  padding: 0px;
  border: none;
}
label {
  display: table;
  margin-left: 10px;
  margin-top: 5px;
  margin-bottom: 2px;
  font-size: 18px;
}
svg {
  margin-right: 10px;
}
.expansion-panel-title:hover {
  background-color: #333;
  transition: background-color 0.3s ease-in-out;
}
</style>
