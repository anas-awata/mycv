<template>
  <div>
    <fieldset class="form-section">
      <div class="expansion-panel-header">
        <div class="expansion-panel-title">
          <button
            @click="deleteCourse(index)"
            class="btn btn-danger col-1 btndelete"
          >
            <i class="fa-solid fa-trash"></i>
          </button>
          <h4
            class="form-title"
            v-if="course[0]"
            @click="this.Hidden = !this.Hidden"
          >
            {{ course[index].coursetitle }}
          </h4>
          <button
            id="expansionPanelPersonal"
            type="button"
            class="col-1"
            @click="this.Hidden = !this.Hidden"
            :class="{ nothidden: !Hidden }"
          >
            <div class="col-1 icon">
              <i class="fa-solid fa-angle-down"> </i>
            </div>
          </button>
        </div>
      </div>
      <div class="grid-container" :class="{ open: !Hidden }">
        <div class="item1">
          <label for="jtitle" class="form-label"
            ><i class="fa-solid fa-laptop-code"> </i> Course Title</label
          >
          <input
            id="jtitle"
            type="text"
            class="form-control"
            ref="input"
            v-model="course[index].coursetitle"
          />
        </div>
        <div class="item2">
          <label for="company" class="form-label"
            ><i class="fa-solid fa-building"> </i> Platform / teacher</label
          >
          <input
            id="company"
            type="text"
            class="form-control"
            v-model="course[index].platform"
          />
        </div>
        <div class="item3">
          <label for="Location" class="form-label"
            ><i class="fa-solid fa-location"> </i> Location</label
          >
          <input
            id="Location"
            type="text"
            class="form-control"
            v-model="course[index].location"
          />
        </div>
        <div class="item4">
          <label for="from" class="form-label"
            ><i class="fa-solid fa-calendar-alt"> </i> From</label
          >
          <input
            id="from"
            type="date"
            class="form-control"
            v-model="course[index].from"
          />
        </div>
        <div class="item5">
          <label for="To" class="form-label"
            ><i class="fa-solid fa-calendar-alt"> </i> To</label
          >
          <input
            id="To"
            type="date"
            class="form-control"
            v-model="course[index].to"
          />
        </div>
        <div class="item6">
          <label for="jobdisc" class="form-label"
            ><i class="fa-solid fa-tasks"> </i> Course Description</label
          >
          <textarea
            id="jobdisc"
            cols="30"
            rows="10"
            class="form-control"
            v-model="course[index].disc"
          ></textarea>
        </div>
      </div>
    </fieldset>
  </div>
</template>

<script>
import { mapMultiRowFields } from "vuex-map-fields";
export default {
  name: "course-item",
  data() {
    return {
      Hidden: false,
    };
  },
  computed: {
    ...mapMultiRowFields(["course"]),
  },
  methods: {
    deleteMe() {
      this.$emit("deleteCourse");
    },
  },
  mounted() {
    console.log(this.jobs);
  },
  props: ["deleteCourse", "index"],
};
</script>

<style lang="scss" scoped>
.grid-container {
  display: grid;
  gap: 0;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto auto auto;
  justify-content: center;
  align-content: center;
  display: none;
  grid-gap: 10px;
  margin-bottom: 20px;
  margin-right: 5%;
  margin-left: 5%;
}
.open {
  display: grid;
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
.item7 {
  grid-column: 1/3;
}
label {
  display: table;
  margin-left: 10px;
  margin-top: 5px;
  margin-bottom: 2px;
  font-size: 18px;
}
#expansionPanelPersonal {
  display: inline;
  align-self: center;
  border-radius: 8px;
  padding: 0px;
  border: none;
  background: none;
  color: #eee;
  margin-right: 5px;
}
.form-title {
  display: inline;
  padding: 10px;
  cursor: pointer;
}
.expansion-panel-title {
  display: flex;
  justify-content: space-between;
}
.expansion-panel-title:hover {
  background-color: #333;
  transition: background-color 0.3s ease-in-out;
}
svg {
  margin-right: 10px;
}
.btndelete {
  display: inline;
  align-self: center;
  border-radius: 8px;
  padding: 5px 8px;
  margin-left: 60px;
}
.item1 {
  grid-column: 1/3;
}
.item6 {
  grid-column: 1/3;
}
.nothidden {
  transform: rotate(180deg) translate(15px, 0px);
  transition: all 0.25s ease 0s;
  margin-right: 12px !important;
}
</style>
