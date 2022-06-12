<template>
  <div>
    <fieldset class="form-section">
      <div class="expansion-panel-header">
        <div class="expansion-panel-title">
          <button
            @click="deletestudy(index)"
            class="btn btn-danger col-1 btndelete"
          >
            <i class="fa-solid fa-trash"></i>
          </button>
          <h4 class="form-title" @click="this.Hidden = !this.Hidden">
            {{ study[index].spec }}
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
          <label for="Spec" class="form-label"
            ><i class="fa-solid fa-user-circle"> </i> Specialization</label
          >
          <input
            id="Spec"
            type="text"
            class="form-control"
            ref="input"
            v-model="study[index].spec"
          />
        </div>
        <div class="item2">
          <label for="Uni" class="form-label"
            ><i class="fa-solid fa-university"> </i> University</label
          >
          <input
            id="Uni"
            type="text"
            class="form-control"
            v-model="study[index].university"
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
            v-model="study[index].location"
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
            v-model="study[index].from"
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
            v-model="study[index].to"
          />
        </div>
        <div class="item6">
          <label for="jobdisc" class="form-label"
            ><i class="fa-solid fa-tasks"> </i>Study Description</label
          >
          <textarea
            id="jobdisc"
            cols="30"
            rows="10"
            class="form-control"
            v-model="study[index].disc"
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
      /* spec: "IT",
      university: "damascus",
      location: "Syria",
      from: "2020-01-01",
      to: "2022-01-01",
      disc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a elit facilisis, adipiscing leo in, dignissim magna.",*/
    };
  },
  methods: {
    /*myStudy() {
      var n = {
        spec: this.spec,
        in: this.index,
        uni: this.university,
        loc: this.location,
        from: this.from,
        to: this.to,
        disc: this.disc,
      };
      this.$store.commit("settingstudy", n);
      console.log(this.$store.state.study);
    },*/
    deleteMe() {
      this.$emit("deleteStudy");
    },
  },
  updated() {},
  computed: {
    ...mapMultiRowFields(["study"]),
  },
  props: ["deletestudy", "index"],
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
