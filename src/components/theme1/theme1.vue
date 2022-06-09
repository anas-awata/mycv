<template>
  <body class="A4">
    <div class="sheet">
      <div class="two-column resume">
        <section class="resume__section resume__header">
          <div class="resume__content">
            <h1>{{ personal["Fname"] }} {{ personal["Lname"] }}</h1>
            <div class="row info-wrapper">
              <div class="info-item row">
                <span class="info-label col-2"
                  ><i class="fa fa-location-arrow"></i></span
                ><span class="info-text col-10">
                  {{ personal["Address"] }}</span
                >
              </div>
              <div class="info-item row">
                <span class="info-label col-2"
                  ><i class="fa fa-envelope"></i></span
                ><span class="info-text col-10">{{ personal["Email"] }}</span>
              </div>
              <div class="info-item row">
                <span class="info-label col-2"><i class="fa fa-phone"></i></span
                ><span class="info-text col-10">{{ personal["Phone"] }}</span>
              </div>
            </div>
          </div>
        </section>
        <div class="resume__columns">
          <div class="resume__main">
            <section class="resume__section resume__summary">
              <div class="resume__content">
                <div class="resume__section-title">
                  <i class="fa fa-pencil-square"></i>
                  <h2>Professional Summary</h2>
                </div>
                <div class="other">
                  <div class="other-info">
                    <p>{{ personal["Jtitle"] }} + {{ personal["About"] }}</p>
                  </div>
                </div>
              </div>
            </section>
            <section class="resume__section resume__experience">
              <div class="resume__content">
                <div class="resume__section-title">
                  <i class="fa fa-briefcase"></i>
                  <h2>Employment History</h2>
                </div>
                <div class="xp-item" v-if="myjob[0]">
                  <div class="xp-job">
                    {{ myjob[0]["jobtitle"] }}
                    <span>- {{ myjob[0]["company"] }}</span
                    ><br /><small>{{ myjob[0]["location"] }}</small>
                  </div>
                  <div class="xp-date">
                    {{ myjob[0]["from"].substring(0, 7) }} -
                    {{ myjob[0]["to"].substring(0, 7) }}
                  </div>
                  <div class="xp-detail">
                    <ul>
                      <li>
                        {{ myjob[0]["disc"] }}
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="xp-item" v-if="myjob[1]">
                  <div class="xp-job">
                    {{ myjob[1]["jobtitle"] }}
                    <span>- {{ myjob[1]["company"] }}</span
                    ><br /><small>{{ myjob[1]["location"] }}</small>
                  </div>
                  <div class="xp-date">
                    {{ myjob[1]["from"].substring(0, 7) }} -
                    {{ myjob[1]["to"].substring(0, 7) }}
                  </div>
                  <div class="xp-detail">
                    <ul>
                      <li>
                        {{ myjob[1]["disc"] }}
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="xp-item" v-if="myjob[2]">
                  <div class="xp-job">
                    {{ myjob[2]["jobtitle"] }}
                    <span>- {{ myjob[2]["company"] }}</span
                    ><br /><small>{{ myjob[2]["location"] }}</small>
                  </div>
                  <div class="xp-date">
                    {{ myjob[2]["from"].substring(0, 7) }} -
                    {{ myjob[2]["to"].substring(0, 7) }}
                  </div>
                  <div class="xp-detail">
                    <ul>
                      <li>
                        {{ myjob[2]["disc"] }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            <section class="resume__section resume__experience">
              <div class="resume__content">
                <div class="resume__section-title">
                  <i class="fa fa-university"></i>
                  <h2>Eduation</h2>
                </div>
                <div class="xp-item" v-if="myStudy[0]">
                  <div class="xp-job">
                    {{ myStudy[0]["spec"] }}
                    <span>- {{ myStudy[0]["university"] }}</span
                    ><br /><small>{{ myStudy[0]["location"] }}</small>
                  </div>
                  <div class="xp-date">
                    {{ myStudy[0]["from"].substring(0, 7) }} -
                    {{ myStudy[0]["to"].substring(0, 7) }}
                  </div>
                  <div class="xp-detail">
                    <ul>
                      <li>
                        {{ myStudy[0]["disc"] }}
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="xp-item" v-if="myStudy[1]">
                  <div class="xp-job">
                    {{ myStudy[1]["spec"] }}
                    <span>- {{ myStudy[1]["university"] }}</span
                    ><br /><small>{{ myStudy[1]["location"] }}</small>
                  </div>
                  <div class="xp-date">
                    {{ myStudy[1]["from"].substring(0, 7) }} -
                    {{ myStudy[1]["to"].substring(0, 7) }}
                  </div>
                  <div class="xp-detail">
                    <ul>
                      <li>
                        {{ myStudy[1]["disc"] }}
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="xp-item" v-if="myStudy[2]">
                  <div class="xp-job">
                    {{ myStudy[2]["spec"] }}
                    <span>- {{ myStudy[2]["university"] }}</span
                    ><br /><small>{{ myStudy[2]["location"] }}</small>
                  </div>
                  <div class="xp-date">
                    {{ myStudy[2]["from"].substring(0, 7) }} -
                    {{ myStudy[2]["to"].substring(0, 7) }}
                  </div>
                  <div class="xp-detail">
                    <ul>
                      <li>
                        {{ myStudy[2]["disc"] }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div class="resume__side">
            <section class="resume__section resume__skills">
              <div class="resume__content">
                <div class="resume__section-title">
                  <i class="fa-brands fa-linkedin"></i>
                  <h2>Social</h2>
                </div>
                <div class="resume__text">
                  <div class="extra">
                    <div class="extra-info">
                      <ul class="list-logos">
                        <li v-if="social['LinkedIn']">
                          <i class="fa-brands fa-linkedin"> </i>
                        </li>
                        <br />
                        <li v-if="social['Twitter']">
                          <i class="fa-brands fa-twitter"> </i>
                        </li>
                        <br />
                        <li v-if="social['Instagram']">
                          <i class="fa-brands fa-instagram"> </i>
                        </li>
                        <br />
                        <li v-if="social['Facebook']">
                          <i class="fa-brands fa-facebook"> </i>
                        </li>
                        <br />
                        <li v-if="social['Github']">
                          <i class="fa-brands fa-github"> </i>
                        </li>
                        <br />
                      </ul>
                      <ul class="list-titles">
                        <li v-if="social['LinkedIn']">LinkedIn</li>
                        <li v-if="social['LinkedIn']">
                          {{ social["LinkedIn"] }}
                        </li>
                        <li v-if="social['Twitter']">Twitter</li>
                        <li v-if="social['Twitter']">
                          {{ social["Twitter"] }}
                        </li>
                        <li v-if="social['Instagram']">Instagram</li>
                        <li v-if="social['Instagram']">
                          {{ social["Instagram"] }}
                        </li>
                        <li v-if="social['Facebook']">Facebook</li>
                        <li v-if="social['Facebook']">
                          {{ social["Facebook"] }}
                        </li>
                        <li v-if="social['Github']">gitHub</li>
                        <li v-if="social['Github']">{{ social["Github"] }}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section class="resume__section resume__skills">
              <div class="resume__content">
                <div class="resume__section-title">
                  <i class="fa fa-align-center"></i>
                  <h2>Skills</h2>
                </div>
                <div class="resume__text">
                  <div v-for="skill in this.$store.state.skills" :key="skill">
                    <div class="extra">
                      <div class="extra-info pill">
                        {{ skill }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section class="resume__section resume__languages">
              <div class="resume__content">
                <div class="resume__section-title">
                  <i class="fa fa-globe"></i>
                  <h2>Languages</h2>
                </div>
                <div
                  v-for="language in this.$store.state.languages"
                  :key="language"
                >
                  <div class="extra">
                    <div class="extra-info">
                      {{ Object.keys(language)[0] }}
                      <small v-if="Object.values(language)[0] == 100"
                        >(native)</small
                      >
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
            </section>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  name: "theme-1",
  components: {},
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

@font-face {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
  src: local("Open Sans Regular"), local("OpenSans-Regular"),
    url("https://fonts.gstatic.com/s/opensans/v16/mem8YaGs126MiZpBA-UFVZ0b.woff2")
      format("woff2");
}
@font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
  src: local("Roboto"), local("Roboto-Regular"),
    url("https://fonts.gstatic.com/s/roboto/v19/KFOmCnqEu92Fr1Mu4mxK.woff2")
      format("woff2");
}
.btn-print {
  z-index: 1;
  position: absolute;
  right: 20px;
  top: 20px;
}
.resume {
  display: block;
  font-family: "Roboto", sans-serif;
  font-size: 13.0736px;
  font-weight: 400;
  line-height: 1.5;
  min-height: 1090.41px;
  background: $profileBg;
}
.resume h1 {
  font-size: 2.86em;
  font-weight: 600;
  letter-spacing: -0.5px;
}
.resume h2 {
  font-size: 1.43em;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 0;
}
.resume p {
  margin-bottom: 1em;
}
.resume p:last-child {
  margin-bottom: 0;
}
.resume ul {
  padding-left: 20px;
}
.resume .resume__header,
.resume .resume__section {
  font-family: "Open Sans", sans-serif;
  font-size: 0.95em;
}
.resume .resume__header {
  padding: 6em 4em 0;
}
.resume .resume__section {
  margin-bottom: 4em;
}
.resume .resume__section:last-child {
  padding-bottom: 0;
}
.resume .resume__section-title {
  display: flex;
  align-items: center;
  margin-bottom: 1.43em;
}
.resume .resume__section-title > svg {
  margin-right: 0.63em;
  font-size: 1.14em;
  background-color: $linkColor;
  color: #fff;
  border: 0.25em solid $linkColor;
  border-radius: 50%;
  width: 2.51em;
  height: 2.51em;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1.6;
}
.resume .resume__section-title > h2 {
  margin-top: 0;
  font-size: 1.5em;
}
.resume .resume__columns {
  overflow: hidden;
  padding: 4em;
  padding-top: 0;
}
.resume .resume__main {
  float: left;
  width: 75%;
  padding-right: 6em;
  text-align: left;
}
.resume .resume__side {
  float: left;
  width: 25%;
}
.resume .other-info p > b {
  color: #555;
}
.list-titles li {
  list-style: none;
}
svg {
  display: inline;
}
.list-logos {
  float: left;
  text-align: left;
  font-weight: 600;
  width: 10%;
  color: #4a4e51;
  padding-left: 15%;
  padding-right: 15%;
  li {
    list-style: none;
  }
}
.list-titles {
  text-align: left;
}
.resume .info-item {
  margin-bottom: 0.2em;
  font-weight: 300;
  width: 40%;
  align-self: center;
  margin-left: 10%;
}
.resume .info-label {
  display: inline-block;
  padding-right: 0.63em;
  font-size: 1.14em;
  min-width: 2.19em;
  text-align: right;
}
.resume .info-text {
  text-align: left;
}
.resume .info-wrapper {
  justify-content: center;
  flex-direction: column;
  flex-wrap: nowrap;
}
.resume .info-label svg {
  color: $linkColor;
}
.resume .xp-item {
  margin-bottom: 4em;
}
.resume .xp-item:last-child {
  margin-bottom: 0;
}
.resume .xp-job {
  font-size: 1.14em;
  font-weight: 600;
  line-height: 1.25;
}
.resume .xp-job span,
.resume .xp-job small {
  font-weight: 400;
}
.resume .xp-job small {
  font-size: 0.9em;
}
.resume .xp-date {
  font-size: 0.8em;
  margin-top: 0.3em;
  margin-bottom: 1em;
  color: $linkColor;
}
.extra {
  margin-bottom: 2em;
}
.resume .extra-info small {
  color: #666;
  display: inline-block;
  font-size: 0.7em;
}
.resume .extra-details,
.resume .extra-details__progress {
  border-radius: 6px;
}
.extra-details {
  margin-top: 0.5em;
  background-color: #d1d9e1;
  width: 100%;
  height: 5px;
  position: relative;
}
.resume .extra-details__progress {
  background-color: $linkColor;
  height: 5px;
  position: absolute;
  top: 0;
  left: 0;
}
.resume .lang-item {
  margin-bottom: 2em;
}
.resume .lang-item:last-child {
  margin-bottom: 0;
}
.resume .lang-label {
  width: 8em;
}
.pill {
  background-color: aliceblue;
}
@media print {
  body {
    background: $profileBg;
  }
}
</style>
