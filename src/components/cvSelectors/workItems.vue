<template>
  <div>
    <fieldset class="form-section">
      <div class="expansion-panel-header">
        <div class="expansion-panel-title">
          <button
            @click="deleteWork(index)"
            class="btn btn-danger col-1 btndelete"
          >
            <i class="fa-solid fa-trash"></i>
          </button>
          <h4 class="form-title" @click="this.Hidden = !this.Hidden">
            {{ jobs[index].jobtitle }}
          </h4>
          <button
            id="expansionPanelPersonal"
            type="button"
            class="col-1"
            @click="this.Hidden = !this.Hidden"
          >
            <i class="fa-solid fa-angle-down"> </i>
          </button>
        </div>
      </div>
      <div class="grid-container" :class="{ open: !Hidden }">
        <div class="item1">
          <label for="jtitle" class="form-label"
            ><i class="fa-solid fa-suitcase"> </i> Job Title</label
          >
          <input
            id="jtitle"
            type="text"
            class="form-control"
            ref="input"
            v-model="jobs[index].jobtitle"
          />
        </div>
        <div class="item2">
          <label for="company" class="form-label"
            ><i class="fa-solid fa-building"> </i> Company</label
          >
          <input
            id="company"
            type="text"
            class="form-control"
            v-model="jobs[index].company"
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
            v-model="jobs[index].location"
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
            v-model="jobs[index].from"
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
            v-model="jobs[index].to"
          />
        </div>
        <div class="item6">
          <label for="jobdisc" class="form-label"
            ><i class="fa-solid fa-tasks"> </i> job Description</label
          >
          <textarea
            id="jobdisc"
            cols="30"
            rows="10"
            class="form-control"
            v-model="jobs[index].disc"
          ></textarea>
        </div>
      </div>
    </fieldset>
  </div>
</template>

<script>
import { mapMultiRowFields } from "vuex-map-fields";
export default {
  name: "work-item",
  data() {
    return {
      Hidden: false,
      /* jobTitle: "front end",
      company: "microsoft",
      location: "us",
      from: "2020-01-01",
      to: "2022-01-01",
      disc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a elit facilisis, adipiscing leo in, dignissim magna.",*/
    };
  },
  computed: {
    /*myjobs() {
      var n = {
        jb: this.jobTitle,
        in: this.index,
        comp: this.company,
        loc: this.location,
        from: this.from,
        to: this.to,
        disc: this.disc,
      };
      this.$store.commit("settingjob", n);
      console.log(this.$store.state.jobs);*/
    ...mapMultiRowFields(["jobs"]),
  },
  methods: {
    deleteMe() {
      this.$emit("deleteWork");
    },
  },
  mounted() {
    console.log(this.jobs);
  },
  props: ["deleteWork", "index"],
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
  background-color: #fff;
  grid-gap: 10px;
  margin-bottom: 20px;
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
  background-color: #fff;
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
.expansion-panel-title {
  background-color: #fff;
}
svg {
  margin-right: 3px;
}
.btndelete {
  display: inline;
  align-self: center;
  border-radius: 8px;
  padding: 4px;
  margin-left: 60px;
}
.item1 {
  grid-column: 1/3;
}
.item6 {
  grid-column: 1/3;
}
</style>
