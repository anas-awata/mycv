<template>
  <section class="theme-3-container">
    <div class="left-fix">
      <div class="header">
        <div class="full-name">
          <span class="first-name">{{ personal["Fname"] }}</span>
          <span class="last-name">{{ personal["Lname"] }}</span>
        </div>
        <div class="position">{{ personal["Jtitle"] }}</div>
        <div class="contact-info">
          <span class="email">Email: </span>
          <span class="email-val">{{ personal["Email"] }}</span>
          <span class="separator"></span>
          <span class="phone">Phone: </span>
          <span class="phone-val">{{ personal["Phone"] }}</span>
        </div>

        <div class="about">
          <span class="desc">
            {{ personal["About"] }}
          </span>
        </div>
        <div class="contact-info">
          <div class="section">
            <div class="social-title">Social</div>
            <div class="social-info">
              <span v-if="social['LinkedIn']"
                ><i class="fa-brands fa-linkedin"> </i> LinkedIn
                {{ social["LinkedIn"] }}</span
              >
              <span v-if="social['LinkedIn']"
                ><i class="fa-brands fa-twitter"> </i> Twitter
                {{ social["Twitter"] }}</span
              >
              <span v-if="social['LinkedIn']"
                ><i class="fa-brands fa-instagram"> </i> Instagram
                {{ social["Instagram"] }}</span
              >
              <span v-if="social['LinkedIn']"
                ><i class="fa-brands fa-facebook"> </i> Facebook
                {{ social["Facebook"] }}</span
              >
              <span v-if="social['LinkedIn']"
                ><i class="fa-brands fa-github"> </i> gitHub
                {{ social["Github"] }}</span
              >
            </div>
          </div>
        </div>
      </div>
      <div class="details">
        <div class="section">
          <div class="section__title">Experience</div>
          <div class="section__list">
            <div class="section__list-item" v-if="myjob[0]">
              <div class="left">
                <div class="name">{{ myjob[0]["company"] }}</div>
                <div class="addr">{{ myjob[0]["location"] }}</div>
                <div class="duration">
                  {{ myjob[0]["from"].substring(0, 7) }} -
                  {{ myjob[0]["to"].substring(0, 7) }}
                </div>
              </div>
              <div class="right">
                <div class="name">{{ myjob[0]["jobtitle"] }}</div>
                <div class="desc">{{ myjob[0]["disc"] }}</div>
              </div>
            </div>
            <div class="section__list-item" v-if="myjob[1]">
              <div class="left">
                <div class="name">{{ myjob[1]["company"] }}</div>
                <div class="addr">{{ myjob[1]["location"] }}</div>
                <div class="duration">
                  {{ myjob[1]["from"].substring(0, 7) }} -
                  {{ myjob[1]["to"].substring(0, 7) }}
                </div>
              </div>
              <div class="right">
                <div class="name">{{ myjob[1]["jobtitle"] }}</div>
                <div class="desc">{{ myjob[1]["disc"] }}</div>
              </div>
            </div>
            <div class="section__list-item" v-if="myjob[2]">
              <div class="left">
                <div class="name">{{ myjob[2]["company"] }}</div>
                <div class="addr">{{ myjob[2]["location"] }}</div>
                <div class="duration">
                  {{ myjob[2]["from"].substring(0, 7) }} -
                  {{ myjob[2]["to"].substring(0, 7) }}
                </div>
              </div>
              <div class="right">
                <div class="name">{{ myjob[2]["jobtitle"] }}</div>
                <div class="desc">{{ myjob[2]["disc"] }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="section">
          <div class="section__title">Education</div>
          <div class="section__list">
            <div class="section__list-item" v-if="myStudy[0]">
              <div class="left">
                <div class="name">{{ myStudy[0]["university"] }}</div>
                <div class="addr">{{ myStudy[0]["location"] }}</div>
                <div class="duration">
                  {{ myStudy[0]["from"].substring(0, 7) }} -
                  {{ myStudy[0]["to"].substring(0, 7) }}
                </div>
              </div>
              <div class="right">
                <div class="name">{{ myStudy[0]["spec"] }}</div>
                <div class="desc">{{ myStudy[0]["disc"] }}</div>
              </div>
            </div>
            <div class="section__list-item" v-if="myStudy[1]">
              <div class="left">
                <div class="name">{{ myStudy[1]["university"] }}</div>
                <div class="addr">{{ myStudy[1]["location"] }}</div>
                <div class="duration">
                  {{ myStudy[1]["from"].substring(0, 7) }} -
                  {{ myStudy[1]["to"].substring(0, 7) }}
                </div>
              </div>
              <div class="right">
                <div class="name">{{ myStudy[1]["spec"] }}</div>
                <div class="desc">{{ myStudy[1]["disc"] }}</div>
              </div>
            </div>
            <div class="section__list-item" v-if="myStudy[2]">
              <div class="left">
                <div class="name">{{ myStudy[2]["university"] }}</div>
                <div class="addr">{{ myStudy[2]["location"] }}</div>
                <div class="duration">
                  {{ myStudy[2]["from"].substring(0, 7) }} -
                  {{ myStudy[2]["to"].substring(0, 7) }}
                </div>
              </div>
              <div class="right">
                <div class="name">{{ myStudy[2]["spec"] }}</div>
                <div class="desc">{{ myStudy[2]["disc"] }}</div>
              </div>
            </div>
            <div class="section">
              <div class="section__title">skills</div>
              <div class="section__list">
                <div class="section__list-item">
                  <ul class="skill-ul">
                    <li v-for="skill in this.$store.state.skills" :key="skill">
                      {{ skill }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="section">
          <div class="section__title">Skills</div>
          <div class="skills">
            <div
              class="skills__item"
              v-for="language in this.$store.state.languages"
              :key="language"
            >
              <div class="left">
                <div class="name">{{ Object.keys(language)[0] }}</div>
              </div>

              <div class="right">
                <input
                  id="ck1"
                  type="checkbox"
                  :checked="Object.values(language)[0] >= 20"
                />
                <label for="ck1"></label>

                <input
                  id="ck2"
                  type="checkbox"
                  :checked="Object.values(language)[0] >= 40"
                />

                <label for="ck2"></label>
                <input
                  id="ck3"
                  type="checkbox"
                  :checked="Object.values(language)[0] >= 60"
                />

                <label for="ck3"></label>
                <input
                  id="ck4"
                  type="checkbox"
                  :checked="Object.values(language)[0] >= 80"
                />
                <label for="ck4"></label>
                <input
                  id="ck5"
                  type="checkbox"
                  :checked="Object.values(language)[0] == 100"
                />
                <label for="ck5"></label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "theme-3",
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

body {
  background-color: $profileBg;
}
.theme-3-container {
  background-color: $profileBg;
  font-weight: 400;
  color: #222;
  font-size: 14px;
  line-height: 26px;
  font-family: "Lato", sans-serif;
  margin: 0;
  box-shadow: 1px 1px 2px #dad7d7;
  z-index: 50000;
  min-height: 100%;
}

.header {
  margin-bottom: 30px;

  .full-name {
    font-size: 40px;
    text-transform: uppercase;
    margin-bottom: 5px;
  }

  .first-name {
    font-weight: 700;
  }

  .last-name {
    font-weight: 300;
    margin-left: 2%;
  }

  .contact-info {
    margin-bottom: 20px;
  }

  .email,
  .phone {
    color: #999;
    font-weight: 300;
  }

  .separator {
    height: 10px;
    display: inline-block;
    border-left: 2px solid #999;
    margin: 0px 10px;
  }

  .position {
    font-weight: bold;
    display: inline-block;
    margin-right: 10px;
    text-decoration: underline;
  }
}

.details {
  line-height: 20px;

  .section {
    margin-bottom: 40px;
  }

  .section:last-of-type {
    margin-bottom: 0px;
  }

  .section__list-item {
    margin-bottom: 40px;
  }

  .section__list-item:last-of-type {
    margin-bottom: 0;
  }

  .left,
  .right {
    vertical-align: top;
    display: inline-block;
  }

  .left {
    width: 35%;
  }

  .right {
    tex-align: right;
    width: 65%;
  }

  .name {
    font-weight: bold;
  }

  a {
    text-decoration: none;
    color: #000;
    font-style: italic;
  }

  a:hover {
    text-decoration: underline;
    color: #000;
  }

  .skills {
  }

  .skills__item {
    margin-bottom: 10px;
  }

  .skills__item .right {
    input {
      display: none;
    }

    label {
      display: inline-block;
      width: 20px;
      height: 20px;
      background: #eee;
      border-radius: 20px;
      margin-right: 3px;
    }

    input:checked + label {
      background: $linkColor;
    }
  }
}
.social-info {
  display: flex;
  justify-content: space-between;
}
.left-fix {
  text-align: left;
  margin-left: 7%;
  margin-right: 7%;
}
.section__title {
  letter-spacing: 2px;
  color: $linkColor;
  font-weight: bold;
  margin-bottom: 10px;
  text-transform: uppercase;
}
.social-title {
  letter-spacing: 2px;
  color: $linkColor;
  font-weight: bold;
  margin-bottom: 10px;
  text-transform: uppercase;
  margin-top: 3%;
}
.skill-ul {
  /*column-count: 3;
  list-style-position: inside;*/
  padding-left: 0;
}
.full-name {
  padding-top: 7%;
}
.position {
  margin-top: 2%;
}
.contact-info {
  margin-top: 2%;
}
</style>
