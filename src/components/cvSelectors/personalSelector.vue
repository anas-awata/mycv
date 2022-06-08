<template>
  <div>
    <fieldset class="form-section">
      <div class="expansion-panel-header">
        <div
          class="expansion-panel-title"
          @click="this.personalHidden = !this.personalHidden"
        >
          <h4 class="form-title">
            <i class="fa-solid fa-user"></i>Personal details
          </h4>
          <button id="expansionPanelPersonal" type="button" class="col-1">
            <i class="fa-solid fa-angle-down"> </i>
          </button>
        </div>
      </div>
      <div class="grid-container" :class="{ open: !personalHidden }">
        <div class="item1">
          <label for="first-name" class="form-label"
            ><i class="fa-solid fa-user"> </i> First name</label
          >
          <input
            id="first-name"
            type="text"
            class="form-control"
            ref="input"
            v-model="Fname"
          />
        </div>
        <div class="item2">
          <label for="last-name" class="form-label"
            ><i class="fa-solid fa-user"> </i> Last name</label
          >
          <input
            id="last-name"
            type="text"
            class="form-control"
            v-model="Lname"
          />
        </div>
        <div class="item3">
          <label for="job-pos" class="form-label"
            ><i class="fa-solid fa-suitcase"> </i> Job Title</label
          >
          <input
            id="job-pos"
            type="text"
            class="form-control"
            v-model="Jtitle"
          />
        </div>
        <div class="item4">
          <label for="email" class="form-label"
            ><i class="fa-solid fa-envelope"> </i> Email</label
          >
          <input id="email" type="email" class="form-control" v-model="Email" />
        </div>
        <div class="item5">
          <label for="phone" class="form-label"
            ><i class="fa-solid fa-phone"> </i> Phone number</label
          >
          <input id="phone" type="tel" class="form-control" v-model="Phone" />
        </div>
        <div class="item6">
          <label for="location" class="form-label"
            ><i class="fa-solid fa-home"> </i> Address</label
          >
          <input
            id="location"
            type="text"
            class="form-control"
            v-model="Address"
          />
        </div>
        <div class="item7">
          <label for="aboutme" class="form-label"
            ><i class="fa-solid fa-user-circle"> </i> About me</label
          >
          <textarea
            id="aboutme"
            name="aboutme"
            cols="30"
            rows="10"
            class="form-control"
            v-model="About"
          ></textarea>
        </div>
      </div>
      <!-- Social Section -->
      <div class="expansion-panel-header">
        <div
          class="expansion-panel-title"
          @click="this.socialHidden = !this.socialHidden"
        >
          <h4 class="form-title">
            <i class="fa-brands fa-linkedin"> </i>Social details
          </h4>
          <button id="expansionPanelPersonal" type="button" class="col-1">
            <i class="fa-solid fa-angle-down"> </i>
          </button>
        </div>
      </div>
      <div class="grid-container" :class="{ open: !socialHidden }">
        <div class="item1">
          <label for="Linkedin" class="form-label"
            ><i class="fa-brands fa-linkedin"> </i> linkedIn</label
          >
          <input
            id="Linkedin"
            type="text"
            class="form-control"
            ref="input"
            v-model="LinkedIn"
          />
        </div>
        <div class="item2">
          <label for="Twitter" class="form-label"
            ><i class="fa-brands fa-twitter"> </i> Twitter</label
          >
          <input
            id="Twitter"
            type="text"
            class="form-control"
            v-model="Twitter"
          />
        </div>
        <div class="item3">
          <label for="Instagram" class="form-label"
            ><i class="fa-brands fa-instagram"> </i> Instagram</label
          >
          <input
            id="Instagram"
            type="text"
            class="form-control"
            v-model="Instagram"
          />
        </div>
        <div class="item4">
          <label for="Facebook" class="form-label"
            ><i class="fa-brands fa-facebook"> </i> Facebook</label
          >
          <input
            id="Facebook"
            type="text"
            class="form-control"
            v-model="Facebook"
          />
        </div>
        <div class="item5">
          <label for="github" class="form-label"
            ><i class="fa-brands fa-github"> </i> gitHub</label
          >
          <input
            id="github"
            type="text"
            class="form-control"
            v-model="Github"
          />
        </div>
      </div>
    </fieldset>
  </div>
</template>

<script>
import { mapFields } from "vuex-map-fields";
export default {
  name: "my-selector",
  data() {
    return {
      personalHidden: true,
      socialHidden: true,
    };
  },
  computed: {
    ...mapFields([
      "personal.Fname",
      "personal.Lname",
      "personal.Jtitle",
      "personal.Email",
      "personal.Phone",
      "personal.Address",
      "personal.About",
      "social.LinkedIn",
      "social.Twitter",
      "social.Instagram",
      "social.Facebook",
      "social.Github",
    ]),
  },
};
</script>

<style lang="scss" scoped>
.grid-container {
  display: grid;
  gap: 0;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto auto auto;
  justify-content: space-around;
  align-content: center;
  display: none;
  background-color: #fff;
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
}
.expansion-panel-title {
  background-color: #fff;
}
svg {
  margin-right: 3px;
}
.form-title svg {
  margin-right: 10px;
}
button {
  border: none;
  background-color: #fff;
}
</style>
