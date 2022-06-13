<template>
  <div>
    <fieldset class="form-section">
      <div class="expansion-panel-header">
        <div class="expansion-panel-title" @click="this.hidden = !this.hidden">
          <h4 class="form-title">
            <i class="fa-solid fa-chalkboard-teacher"> </i>Courses
          </h4>
          <div class="col-1 icon" :class="{ nothidden: !hidden }">
            <i class="fa-solid fa-angle-down"> </i>
          </div>
        </div>
      </div>
      <div class="work-container" :class="{ open: !hidden }">
        <div>
          <button
            v-if="courses.length < 3"
            @click="pushCourse"
            class="btn btn-success"
          >
            add new Course
            <i class="fa-solid fa-plus"> </i>
          </button>
          <component
            v-for="(course, index) in courses"
            :key="index"
            :courses="courses"
            :is="course.data"
            :index="index"
            :deleteCourse="deleteMyCourse"
          >
          </component>
        </div>
      </div>
    </fieldset>
  </div>
</template>

<script>
import { mapMultiRowFields } from "vuex-map-fields";
import coursesItem from "./coursesItems.vue";
export default {
  name: "course-selector",
  components: { coursesItem },
  data() {
    return {
      hidden: true,
    };
  },
  methods: {
    pushCourse() {
      //this.works.push({ data: "workItem" });
      this.$store.commit("settingcourse");
      this.$store.commit("updatecourses");
    },
    deleteMyCourse(index) {
      this.$store.commit("deletecourses", index);
      this.$store.commit("deletecourse", index);
      console.log(index);
      console.log(this.courses);
    },
  },
  computed: {
    ...mapMultiRowFields(["courses"]),
  },
  mounted() {
    console.log(this.courses);
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
.nothidden {
  transform: rotate(180deg) translate(15px, 0px);
  transition: all 0.25s ease 0s;
  margin-right: 4px !important;
}
.icon {
  margin-right: 10px;
}
</style>
