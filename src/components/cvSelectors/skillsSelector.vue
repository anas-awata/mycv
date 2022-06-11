<template>
  <div>
    <fieldset class="form-section">
      <!-- skills Section -->
      <div class="expansion-panel-header">
        <div
          class="expansion-panel-title"
          @click="this.skillsHidden = !this.skillsHidden"
        >
          <h4 class="form-title">
            <i class="fa-solid fa-cogs"> </i>Skills details
          </h4>
          <i class="fa-solid fa-angle-down col-1"> </i>
        </div>
      </div>
      <div class="grid-container" :class="{ open: !skillsHidden }">
        <div class="item1">
          <label for="skills" class="form-label"
            ><i class="fa-solid fa-cogs"> </i> skills</label
          >
          <input
            id="skills"
            type="text"
            class="form-control"
            v-model="tempSkill"
            @keyup.enter="addSkill"
          />
        </div>
        <div class="item2">
          <button @click="addSkill" class="btn btn-success">Add</button>
        </div>
        <div class="item3">
          <label class="form-label">my skills:</label>
        </div>
        <div class="item4">
          <div v-for="skill in skills" :key="skill" class="pill">
            <span @click="deleteSkill(skill)"
              >{{ skill }} <i class="fa-solid fa-close"></i
            ></span>
          </div>
        </div>
        <div class="item5">
          <label for="languages" class="form-label label-lang"
            ><i class="fa-solid fa-language"> </i>languages</label
          >
          <div class="row lang-select">
            <select v-model="mylang" class="form-select lang col-7">
              <option value="" selected disabled hidden>Language</option>
              <option value="Arabic">Arabic</option>
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="German">German</option>
            </select>
            <select v-model="mywidth" class="form-select lang-level col-5">
              <option value="" selected disabled hidden>Level</option>
              <option selected value="100">Native</option>
              <option value="80">very good</option>
              <option value="60">good</option>
              <option value="40">beginner</option>
            </select>
          </div>
        </div>
        <div class="item6">
          <button class="btn btn-success" @click="addLanguage">Add</button>
        </div>
        <div class="item7">
          <label class="form-label">my languages:</label>
        </div>
        <div class="item8">
          <div class="section-wrapper">
            <div v-for="language in languages" :key="language">
              {{ Object.keys(language)[0] }}
              <div class="row progress-row">
                <div class="col-9">
                  <div class="progress">
                    <div
                      class="bar"
                      role="progressbar"
                      :style="{ width: Object.values(language)[0] + '%' }"
                      :aria-valuenow="Object.values(language)[0]"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div class="col-3">
                  <button
                    class="btn btn-danger"
                    @click="deleteLanguage(language)"
                  >
                    <i class="fa-solid fa-close"></i>
                  </button>
                </div>
              </div>
            </div>
            <!--  <ul class="skill-percentage">
              <li v-for="language in languages" :key="language">
                {{ language }}
              </li>
            </ul>
            -->
          </div>
        </div>
      </div>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: "my-selector",
  data() {
    return {
      personalHidden: true,
      skillsHidden: false,
      skills: this.$store.state.skills,
      tempSkill: "",
      languages: this.$store.state.languages,
      mywidth: "",
      mylang: "",
    };
  },
  methods: {
    addSkill() {
      if (!this.skills.includes(this.tempSkill)) {
        this.skills.push(this.tempSkill);
        this.$store.commit("settingskills", this.skills);
      }
      this.tempSkill = "";
    },
    deleteSkill(skill) {
      this.skills = this.skills.filter((item) => {
        return skill !== item;
      });
      this.$store.commit("settingskills", this.skills);
    },
    addLanguage() {
      let found = false;
      let update = false;
      for (var i = 0; i < this.languages.length; i++) {
        if (this.languages[i][this.mylang] == this.mywidth) {
          found = true;
          break;
        } else if (this.languages[i][this.mylang]) {
          update = true;
          break;
        }
      }
      if (update) {
        this.languages.splice(i, 1);
        this.languages.push({ [this.mylang]: this.mywidth });
        this.$store.commit("settinglanguages", this.languages);
      } else if (!found) {
        this.languages.push({ [this.mylang]: this.mywidth });
        this.$store.commit("settinglanguages", this.languages);
      }
      this.mylang = "";
      this.mywidth = "";
    },
    deleteLanguage(lang) {
      this.languages = this.languages.filter((item) => {
        return lang !== item;
      });
      this.$store.commit("settinglanguages", this.languages);
    },
  },
};
</script>

<style lang="scss" scoped>
@mixin breakpoint($point) {
  @if $point == papa-bear {
    @media (max-width: 1500px) {
      @content;
    }
  }
  @if $point == mama-bear {
    @media (max-width: 1200px) {
      @content;
    }
  }
  @if $point == brother-bear {
    @media (max-width: 850px) {
      @content;
    }
  } @else if $point == baby-bear {
    @media (max-width: 450px) {
      @content;
    }
  }
}

.progress {
  margin: 20px auto;
  padding: 0;
  width: 90%;
  height: 10px;
  overflow: hidden;
  background: #e5e5e5;
  border-radius: 6px;
}

.bar {
  position: relative;
  float: left;
  min-width: 1%;
  height: 100%;
  background: cornflowerblue;
}
.grid-container {
  display: grid;
  gap: 0;
  grid-template-columns: 60% 15%;
  grid-template-rows: auto auto auto auto;
  justify-content: space-around;
  align-content: center;
  display: none;
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
.item3,
.item4,
.item7,
.item8 {
  grid-column: 1/3;
}
.item2,
.item6 {
  align-self: end;
}
.item4 {
  margin-bottom: 7%;
}
.item6 {
  margin-left: 10px;
}
.item7 {
  margin-top: 20px;
  margin-left: -6px;
}
label {
  display: table;
  margin-left: 10px;
  margin-top: 5px;
  margin-bottom: 2px;
  font-size: 18px;
}
.label-lang {
  margin-bottom: 20px;
}
#expansionPanelPersonal {
  display: inline;
  align-self: center;
  border-radius: 8px;
  padding: 0px;
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
.pill {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  background: #eee;
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #000;
  cursor: pointer;
}
.lang-select {
  flex-wrap: nowrap;
  gap: 10px;
}
.lang {
  width: 58%;
}
.lang-level {
  width: 50%;
}
.progress-row {
  align-items: center;
}
.btn-danger {
  height: 2.2em;
}

@keyframes skill {
  from {
    width: 0%;
  }
  to {
    width: v-bind("mywidth");
  }
}

.form-title svg {
  margin-right: 10px;
}
.section-wrapper {
  width: 100%;
  margin-top: 7%;
  color: #eee;
}
</style>
