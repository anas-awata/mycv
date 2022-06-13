<template>
  <div class="resume-wrapper row">
    <section class="profile section-padding col-md-5">
      <div class="container">
        <personal-Info />
        <social-Info />
        <div class="section-wrapper clearfix">
          <skills-Info />
        </div>
      </div>
    </section>
    <section class="experience section-padding col-md-7">
      <work-info />
      <study-info />
      <courses-info />
    </section>
  </div>
</template>

<script>
import personalInfo from "./them2Components/personalSocial/personalInfo.vue";
import socialInfo from "./them2Components/personalSocial/socialInfo.vue";
import workInfo from "./them2Components/work/workInfo.vue";
import studyInfo from "./them2Components/study/studyInfo.vue";
import coursesInfo from "./them2Components/courses/coursesInfo.vue";
import skillsInfo from "./them2Components/skills/skillsInfo.vue";
export default {
  name: "them-2",
  data() {
    return {};
  },
  components: {
    personalInfo,
    socialInfo,
    workInfo,
    studyInfo,
    skillsInfo,
    coursesInfo,
  },
  methods: {},
  computed: {
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
  mounted() {
    console.log(this.cvColorOne);
  },
};
</script>

<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Varela+Round);
@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700);

$profileBg: v-bind(cvColorOne);
$skillsBg: v-bind(cvColorTwo);
$profileColor: #9099a0;
$skillsColor: #9099a0;
$linkColor: v-bind(headingColor);
$boldColor: #4a4e51;
$time: 0.6s;

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

*,
*::after,
*::before {
  box-sizing: border-box;
}

html,
body {
  height: 100%;
}

body {
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  line-height: 1.5em;
}
a {
  color: $linkColor;
  text-decoration: none;
}
.bold {
  color: $boldColor;
  font-weight: 400;
}

.resume-wrapper {
  position: relative;
  text-align: center;
  height: 100%;
  box-shadow: 6px 10px 28px 0px rgba(0, 0, 0, 0.4);
}

.container {
}

.profile {
  background: $profileBg;
  width: 40%;
  float: left;
  color: $profileColor;
  min-height: 100vh;
  min-height: 100%;
  border-left-style: ridge;
  @include breakpoint(brother-bear) {
    width: 100%;
  }
  .name-wrapper {
    float: left;
    width: 60%;
  }
  h1 {
    font-size: 2.5em;
    text-align: left;
    font-family: "Varela Round", sans-serif;
    color: $boldColor;
    text-transform: uppercase;
    line-height: 1em;
    padding-top: 40px;
    @include breakpoint(mama-bear) {
      padding-top: 20px;
    }
    @include breakpoint(baby-bear) {
      font-size: 1.8em;
      padding-top: 20px;
    }
  }
  li {
    margin-bottom: 10px;
  }
  .contact-info {
    margin-top: 10px;
    font-weight: 300;
    width: 100%;
    display: flex;
    margin-left: -15px;
    @include breakpoint(mama-bear) {
      margin-top: 70px;
    }
    @include breakpoint(baby-bear) {
      margin-top: 50px;
    }
  }
  .list-titles {
    float: left;
    text-align: left;
    font-weight: 600;
    width: 40%;
    color: $boldColor;
  }
  .list-content {
    float: left;
    width: 60%;
    text-align: left;
    font-weight: 300;
  }
  .contact-presentation {
    text-align: left;
    font-weight: 300;
    margin-top: 170px;
    margin-bottom: 30px;
    display: block;
  }
}
.experience {
  background: $skillsBg;
  width: 60%;
  float: left;
  position: relative;
  color: $skillsColor;
  font-weight: 300;
  min-height: 100%;
  min-height: 100vh;
  @include breakpoint(brother-bear) {
    width: 100%;
  }
  h3.experience-title {
    color: $linkColor;
    text-align: left;
    text-transform: uppercase;
    font-size: 1.2em;
    margin-bottom: 20px;
    font-weight: 400;
  }
  .company-wrapper {
    width: 30%;
    float: left;
    text-align: left;
    padding-right: 5%;
    margin-bottom: 20px;
    @include breakpoint(baby-bear) {
      width: 100%;
      margin-bottom: 20px;
    }
  }
  .job-wrapper {
    width: 70%;
    float: left;
    text-align: left;
    padding-right: 5%;
    margin-bottom: 20px;
    @include breakpoint(baby-bear) {
      width: 100%;
      margin-bottom: 40px;
    }
  }
  .experience-title {
    color: white;
    margin-bottom: 15px;
  }
}
.bar {
  position: relative;
  float: left;
  min-width: 1%;
  height: 100%;
  background: $linkColor;
}

.section-padding {
  padding: 60px 60px 40px 40px;
  @include breakpoint(brother-bear) {
    padding: 80px 15% 40px 10%;
  }
  @include breakpoint(baby-bear) {
    padding: 40px 10% 20px 5%;
  }
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
  color: #777;
  cursor: pointer;
}

.section-wrapper {
  float: left;
  text-align: left;
  color: $skillsColor;
  font-weight: 300;
  margin-bottom: 20px;
  @include breakpoint(baby-bear) {
    width: 100%;
  }
  &:nth-child(3) {
    padding-right: 8%;
  }
  h3.section-title {
    color: $linkColor;
    text-align: left;
    text-transform: uppercase;
    font-size: 1.2em;
    margin-bottom: 20px;
    font-weight: 400;
  }
}
</style>
