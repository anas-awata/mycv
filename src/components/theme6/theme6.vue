<template>
  <div class="rela-block page">
    <div class="rela-block top-bar">
      <div class="caps name">
        <div class="abs-center">{{ personal["Jtitle"] }}</div>
      </div>
    </div>
    <div class="side-bar">
      <div class="mugshot">
        <div class="logo">
          <p class="logo-text">
            {{ personal["Fname"] }} {{ personal["Lname"] }}
          </p>
        </div>
      </div>
      <div class="myinfo">
        <div class="info-item row">
          <span class="info-label col-2"><i class="fa fa-home"></i></span
          ><span class="info-text col-10">{{ personal["Address"] }}</span>
        </div>
        <div class="info-item row">
          <span class="info-label col-2"><i class="fa fa-envelope"></i></span
          ><span class="info-text col-10">{{ personal["Email"] }}</span>
        </div>
        <div class="info-item row">
          <span class="info-label col-2"><i class="fa fa-phone"></i></span
          ><span class="info-text col-10">{{ personal["Phone"] }}</span>
        </div>
      </div>
      <br />
      <p class="rela-block social twitter" v-if="social['Twitter']">
        {{ social["Twitter"] }}
      </p>
      <p class="rela-block social linked-in" v-if="social['LinkedIn']">
        {{ social["LinkedIn"] }}
      </p>
      <p class="rela-block social facebook" v-if="social['Facebook']">
        {{ social["Facebook"] }}
      </p>
      <p class="rela-block social instagram" v-if="social['Instagram']">
        {{ social["Instagram"] }}
      </p>
      <p class="rela-block social github" v-if="social['Github']">
        {{ social["Github"] }}
      </p>
      <p class="rela-block caps side-header">Skills</p>
      <p
        class="rela-block list-thing"
        v-for="skill in this.$store.state.skills"
        :key="skill"
      >
        {{ skill }}
      </p>
      <p class="rela-block caps side-header">Languages</p>
      <div v-for="language in this.$store.state.languages" :key="language">
        <div class="extra">
          <div class="extra-info">
            {{ Object.keys(language)[0] }}
            <small v-if="Object.values(language)[0] == 100">(native)</small>
          </div>
          <div class="extra-details">
            <div
              class="extra-details__progress"
              :style="{ width: Object.values(language)[0] + '%' }"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <div class="rela-block content-container">
      <div class="rela-block caps greyed">Profile</div>
      <p class="long-margin">
        {{ personal["About"] }}
      </p>
      <div class="rela-block caps greyed">Experience</div>
      <div v-if="myjob[0]">
        <div class="row">
          <h3 class="col-6">{{ myjob[0]["jobtitle"] }}</h3>
          <p class="light col-6">
            {{ myjob[0]["company"] }} - {{ myjob[0]["location"] }}
          </p>
        </div>
        <p class="light">
          {{ myjob[0]["from"].substring(0, 7) }} -
          {{ myjob[0]["to"].substring(0, 7) }}
        </p>
        <p class="justified">
          {{ myjob[0]["disc"] }}
        </p>
      </div>
      <div v-if="myjob[1]">
        <div class="row">
          <h3 class="col-6">{{ myjob[1]["jobtitle"] }}</h3>
          <p class="light col-6">
            {{ myjob[1]["company"] }} - {{ myjob[1]["location"] }}
          </p>
        </div>
        <p class="light">
          {{ myjob[1]["from"].substring(0, 7) }} -
          {{ myjob[1]["to"].substring(0, 7) }}
        </p>
        <p class="justified">
          {{ myjob[1]["disc"] }}
        </p>
      </div>
      <div v-if="myjob[2]">
        <div class="row">
          <h3 class="col-6">{{ myjob[2]["jobtitle"] }}</h3>
          <p class="light col-6">
            {{ myjob[2]["company"] }} - {{ myjob[2]["location"] }}
          </p>
        </div>
        <p class="light">
          {{ myjob[2]["from"].substring(0, 7) }} -
          {{ myjob[2]["to"].substring(0, 7) }}
        </p>
        <p class="justified">
          {{ myjob[2]["disc"] }}
        </p>
      </div>
      <div class="rela-block caps greyed">Education</div>
      <div v-if="myStudy[0]">
        <div class="row">
          <h3 class="col-6">{{ myStudy[0]["spec"] }}</h3>
          <p class="light col-6">
            {{ myStudy[0]["university"] }} - {{ myStudy[0]["location"] }}
          </p>
        </div>
        <p class="light">
          {{ myStudy[0]["from"].substring(0, 7) }} -
          {{ myStudy[0]["to"].substring(0, 7) }}
        </p>
        <p class="justified">
          {{ myStudy[0]["disc"] }}
        </p>
      </div>
      <div v-if="myStudy[1]">
        <div class="row">
          <h3 class="col-6">{{ myStudy[1]["spec"] }}</h3>
          <p class="light col-6">
            {{ myStudy[1]["university"] }} - {{ myStudy[1]["location"] }}
          </p>
        </div>
        <p class="light">
          {{ myStudy[1]["from"].substring(0, 7) }} -
          {{ myStudy[1]["to"].substring(0, 7) }}
        </p>
        <p class="justified">
          {{ myStudy[1]["disc"] }}
        </p>
      </div>
      <div v-if="myStudy[2]">
        <div class="row">
          <h3 class="col-6">{{ myStudy[2]["spec"] }}</h3>
          <p class="light col-6">
            {{ myStudy[2]["university"] }} - {{ myStudy[2]["location"] }}
          </p>
        </div>
        <p class="light">
          {{ myStudy[2]["from"].substring(0, 7) }} -
          {{ myStudy[2]["to"].substring(0, 7) }}
        </p>
        <p class="justified">
          {{ myStudy[2]["disc"] }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "theme-6",
  computed: {
    personal() {
      return this.$store.state.personal;
    },
    myjob() {
      return this.$store.state.jobs;
    },
    myStudy() {
      return this.$store.state.study;
    },
    social() {
      return this.$store.state.social;
    },
    headingColor() {
      return this.$store.state.headingColor;
    },
    cvColorOne() {
      return this.$store.state.cvColors[0].firstcolor;
    },
    cvColorTwo() {
      return this.$store.state.cvColors[0].secondcolor;
    },
  },
};
</script>

<style lang="scss" scoped>
$profileBg: v-bind(cvColorOne);
$secondBg: v-bind(cvColorTwo);
$linkColor: v-bind(headingColor);

.rela-block {
  display: block;
  position: relative;
  margin: auto;
  top: "";
  left: "";
  right: "";
  bottom: "";
}
.rela-inline {
  display: inline-block;
  position: relative;
  margin: auto;
  top: "";
  left: "";
  right: "";
  bottom: "";
}
.floated {
  display: inline-block;
  position: relative;
  margin: false;
  top: "";
  left: "";
  right: "";
  bottom: "";
  float: left;
}
.abs-center {
  display: false;
  position: absolute;
  margin: false;
  top: 50%;
  left: 50%;
  right: false;
  bottom: false;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 88%;
}
body {
  font-family: "Open Sans";
  font-size: 18px;
  letter-spacing: 0px;
  font-weight: 400;
  line-height: 28px;
}
.caps {
  text-transform: uppercase;
}
.justified {
  text-align: justify;
}
p.light {
  color: #777;
}
h2 {
  font-family: "Open Sans";
  font-size: 30px;
  letter-spacing: 5px;
  font-weight: 600;
  line-height: 40px;
  color: #000;
}
h3 {
  font-family: "Open Sans";
  font-size: 21px;
  letter-spacing: 1px;
  font-weight: 600;
  line-height: 28px;
  color: #000;
}
.page {
  width: 100%;
  background-color: #fff;
  box-shadow: 6px 10px 28px 0px rgba(0, 0, 0, 0.4);
}
.top-bar {
  height: 220px;
  background-color: $secondBg;
  color: #fff;
}
.name {
  display: false;
  position: absolute;
  margin: false;
  top: false;
  left: calc(350px + 5%);
  right: 0;
  bottom: 0;
  height: 120px;
  text-align: center;
  font-family: "Raleway";
  font-size: 58px;
  letter-spacing: 8px;
  font-weight: 100;
  line-height: 60px;
}
.name div {
  width: 94%;
}
.side-bar {
  display: false;
  position: absolute;
  margin: false;
  top: 60px;
  left: 5%;
  right: false;
  bottom: 0;
  width: 350px;
  background-color: $profileBg;
  padding: 320px 30px 50px;
}
.mugshot {
  display: false;
  position: absolute;
  margin: false;
  top: 65px;
  left: 85px;
  right: false;
  bottom: false;
  height: 210px;
  width: 210px;
}
.mugshot .logo {
  margin: -23px;
}
.logo {
  display: false;
  position: absolute;
  margin: false;
  top: 0;
  left: 0;
  right: false;
  bottom: false;
  z-index: 100;
  margin: 0;
  color: #000;
  width: 250px;
}
.logo .logo-text {
  display: false;
  position: absolute;
  margin: false;
  top: 58%;
  left: "";
  right: 16%;
  bottom: "";
  cursor: pointer;
  font-family: "Montserrat";
  font-size: 55px;
  letter-spacing: 0px;
  font-weight: 400;
  line-height: 58.333333333333336px;
}
.myinfo {
  margin-left: 15%;
  margin-top: -35%;
  margin-bottom: 20px;
  text-align: left;
}
.info-label {
  text-align: right;
}
.social {
  padding-left: 110px;
  margin-bottom: 20px;
  cursor: pointer;
}
.social:before {
  content: "";
  display: false;
  position: absolute;
  margin: false;
  top: -4px;
  left: 10px;
  right: false;
  bottom: false;
  height: 35px;
  width: 35px;
  background-size: cover !important;
}
.social.twitter:before {
  background: url("https://cdn3.iconfinder.com/data/icons/social-media-2026/60/Socialmedia_icons_Twitter-07-128.png")
    center no-repeat;
  margin-left: 11%;
}
.social.github:before {
  background: url("https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-social-github-outline-256.png")
    center no-repeat;
  margin-left: 10%;
}
.social.instagram:before {
  background: url("https://cdn0.iconfinder.com/data/icons/phosphor-thin-vol-3/256/instagram-logo-thin-256.png")
    center no-repeat;
  margin-left: 10%;
}
.social.linked-in:before {
  background: url("https://cdn3.iconfinder.com/data/icons/social-media-2026/60/Socialmedia_icons_LinkedIn-128.png")
    center no-repeat;
  margin-left: 11%;
}
.social.facebook:before {
  background: url("https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-social-facebook-outline-256.png")
    center no-repeat;
  margin-left: 10%;
}
.side-header {
  font-family: "Open Sans";
  font-size: 18px;
  letter-spacing: 4px;
  font-weight: 600;
  line-height: 28px;
  margin: 60px auto 10px;
  padding-bottom: 5px;
  border-bottom: 1px solid #888;
}
.list-thing {
  margin-bottom: 10px;
}
.content-container {
  margin-right: 0;
  width: calc(95% - 350px);
  padding: 25px 40px 50px;
}
.content-container > * {
  margin: 0 auto 25px;
}
.content-container > h3 {
  margin: 0 auto 5px;
}
.content-container > p.long-margin {
  margin: 0 auto 50px;
}
.title {
  width: 80%;
  text-align: center;
}
.separator {
  width: 240px;
  height: 2px;
  background-color: #999;
}
.greyed {
  background-color: $linkColor;
  width: 100%;
  max-width: 580px;
  text-align: center;
  font-family: "Open Sans";
  font-size: 18px;
  letter-spacing: 6px;
  font-weight: 600;
  line-height: 28px;
}
.extra {
  margin-bottom: 2em;
}
.extra-info small {
  color: #666;
  display: inline-block;
  font-size: 0.7em;
}
.extra-details,
.extra-details__progress {
  border-radius: 6px;
}
.extra-details {
  margin-top: 0.5em;
  background-color: #d1d9e1;
  width: 100%;
  height: 5px;
  position: relative;
}
.extra-details__progress {
  background-color: $secondBg;
  height: 5px;
  position: absolute;
  top: 0;
  left: 0;
}
@media screen and (max-width: 1150px) {
  .name {
    color: #fff;
    font-family: "Raleway";
    font-size: 38px;
    letter-spacing: 6px;
    font-weight: 100;
    line-height: 48px;
  }
}
</style>
