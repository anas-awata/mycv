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
        <div class="section" v-if="myjob[0]">
          <div class="section__title">Experience</div>
          <div class="section__list" v-for="job in myjob" :key="job">
            <div class="section__list-item" v-if="job">
              <div class="left">
                <div class="name">{{ job["company"] }}</div>
                <div class="addr">{{ job["location"] }}</div>
                <div class="duration">
                  {{ job["from"].substring(0, 7) }} -
                  {{ job["to"].substring(0, 7) }}
                </div>
              </div>
              <div class="right">
                <div class="name">{{ job["jobtitle"] }}</div>
                <div class="desc">{{ job["disc"] }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="section" v-if="myStudy[0]">
          <div class="section__title">Education</div>
          <div class="section__list" v-for="study in myStudy" :key="study">
            <div class="section__list-item" v-if="study">
              <div class="left">
                <div class="name">{{ study["university"] }}</div>
                <div class="addr">{{ study["location"] }}</div>
                <div class="duration">
                  {{ study["from"].substring(0, 7) }} -
                  {{ study["to"].substring(0, 7) }}
                </div>
              </div>
              <div class="right">
                <div class="name">{{ study["spec"] }}</div>
                <div class="desc">{{ study["disc"] }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="section" v-if="mycourse[0]">
          <div class="section__title">Courses</div>
          <div class="section__list" v-for="course in mycourse" :key="course">
            <div class="section__list-item" v-if="course">
              <div class="left">
                <div class="name">{{ course["platform"] }}</div>
                <div class="addr">{{ course["location"] }}</div>
                <div class="duration">
                  {{ course["from"].substring(0, 7) }} -
                  {{ course["to"].substring(0, 7) }}
                </div>
              </div>
              <div class="right">
                <div class="name">{{ course["coursetitle"] }}</div>
                <div class="desc">{{ course["disc"] }}</div>
              </div>
            </div>
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
        <div class="section">
          <div class="section__title">Languages</div>
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
    mycourse() {
      return this.$store.state.course;
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
  box-shadow: 6px 10px 28px 0px rgba(0, 0, 0, 0.4);
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
@media print {
  body {
    background: $profileBg;
  }
}
</style>
