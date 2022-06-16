<template>
  <article class="resume-wrapper text-center position-relative">
    <div class="resume-wrapper-inner text-left bg-white shadow-lg">
      <header class="resume-header pt-4 pt-md-0">
        <div class="media flex-column flex-md-row">
          <div
            class="media-body p-4 d-flex flex-column flex-md-row mx-auto mx-lg-0"
          >
            <div class="primary-info">
              <h1
                class="name mt-0 mb-1 text-white text-uppercase text-uppercase"
              >
                {{ personal["Fname"] }} {{ personal["Lname"] }}
              </h1>
              <div class="title mb-3">{{ personal["Jtitle"] }}</div>
              <ul class="list-unstyled primary-list">
                <li class="mb-2">
                  <i
                    class="fas fa-envelope fa-fw mr-2"
                    data-fa-transform="grow-3"
                  ></i
                  >{{ personal["Email"] }}
                </li>
                <li>
                  <i
                    class="fas fa-mobile-alt fa-fw mr-2"
                    data-fa-transform="grow-6"
                  ></i
                  >{{ personal["Phone"] }}
                </li>
                <li class="mb-2">
                  <i
                    class="fas fa-home fa-fw mr-2"
                    data-fa-transform="grow-3"
                  ></i
                  >{{ personal["Address"] }}
                </li>
              </ul>
            </div>
            <div class="secondary-info ml-md-auto mt-2">
              <ul class="resume-social list-unstyled">
                <li class="mb-3" v-if="social['LinkedIn']">
                  <span class="fa-container container-social text-center mr-2"
                    ><i class="fa-brands fa-linkedin fa-fw"></i></span
                  ><span>{{ social["LinkedIn"] }}</span>
                </li>
                <li class="mb-3" v-if="social['Twitter']">
                  <span class="fa-container container-social text-center mr-2"
                    ><i class="fa-brands fa-twitter fa-fw"></i></span
                  ><span>{{ social["Twitter"] }}</span>
                </li>
                <li class="mb-3" v-if="social['Instagram']">
                  <span class="fa-container container-social text-center mr-2"
                    ><i class="fa-brands fa-instagram fa-fw"></i></span
                  ><span>{{ social["Instagram"] }}</span>
                </li>
                <li class="mb-3" v-if="social['Facebook']">
                  <span class="fa-container container-social text-center mr-2"
                    ><i class="fa-brands fa-facebook fa-fw"></i></span
                  ><span>{{ social["Facebook"] }}</span>
                </li>
                <li class="mb-3" v-if="social['Github']">
                  <span class="fa-container container-social text-center mr-2"
                    ><i class="fa-brands fa-github fa-fw"></i></span
                  ><span>{{ social["Github"] }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <div class="resume-body p-5">
        <section class="resume-section summary-section mb-5">
          <div class="resume-section-content">
            <p class="mb-0">
              {{ personal["About"] }}
            </p>
          </div>
        </section>
        <div class="row">
          <div class="col-lg-9">
            <section
              class="resume-section experience-section mb-5"
              v-if="myjob[0]"
            >
              <h2
                class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3"
              >
                Experience
              </h2>
              <div class="resume-section-content">
                <div class="resume-timeline position-relative">
                  <div v-for="job in myjob" :key="job">
                    <article
                      class="resume-timeline-item position-relative pb-5"
                      v-if="job"
                    >
                      <div class="resume-timeline-item-header mb-2">
                        <div class="d-flex flex-column flex-md-row">
                          <h3
                            class="resume-position-title font-weight-bold mb-1"
                          >
                            {{ job["jobtitle"] }}
                          </h3>
                          <div class="resume-company-name ml-auto">
                            {{ job["company"] }}
                          </div>
                        </div>
                        <div class="resume-position-time">
                          {{ job["from"].substring(0, 7) }} -
                          {{ job["to"].substring(0, 7) }}
                        </div>
                        <div class="resume-position-time">
                          {{ job["location"] }}
                        </div>
                      </div>
                      <!--//resume-timeline-item-header-->
                      <div class="resume-timeline-item-desc">
                        <p>
                          {{ job["disc"] }}
                        </p>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </section>
            <section
              class="resume-section experience-section mb-5"
              v-if="myStudy[0]"
            >
              <h2
                class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3"
              >
                Education
              </h2>
              <div class="resume-section-content">
                <div class="resume-timeline position-relative">
                  <div v-for="study in myStudy" :key="study">
                    <article
                      class="resume-timeline-item position-relative pb-5"
                      v-if="study"
                    >
                      <div class="resume-timeline-item-header mb-2">
                        <div class="d-flex flex-column flex-md-row">
                          <h3
                            class="resume-position-title font-weight-bold mb-1"
                          >
                            {{ study["spec"] }}
                          </h3>
                          <div class="resume-company-name ml-auto">
                            {{ study["university"] }}
                          </div>
                        </div>
                        <div class="resume-position-time">
                          {{ study["from"].substring(0, 7) }} -
                          {{ study["to"].substring(0, 7) }}
                        </div>
                        <div class="resume-position-time">
                          {{ study["location"] }}
                        </div>
                      </div>
                      <!--//resume-timeline-item-header-->
                      <div class="resume-timeline-item-desc">
                        <p>
                          {{ study["disc"] }}
                        </p>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </section>
            <section
              class="resume-section experience-section mb-5"
              v-if="mycourse[0]"
            >
              <h2
                class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3"
              >
                Courses
              </h2>
              <div class="resume-section-content">
                <div class="resume-timeline position-relative">
                  <div v-for="course in mycourse" :key="course">
                    <article
                      class="resume-timeline-item position-relative pb-5"
                      v-if="course"
                    >
                      <div class="resume-timeline-item-header mb-2">
                        <div class="d-flex flex-column flex-md-row">
                          <h3
                            class="resume-position-title font-weight-bold mb-1"
                          >
                            {{ course["coursetitle"] }}
                          </h3>
                          <div class="resume-company-name ml-auto">
                            {{ course["platform"] }}
                          </div>
                        </div>
                        <div class="resume-position-time">
                          {{ course["from"].substring(0, 7) }} -
                          {{ course["to"].substring(0, 7) }}
                        </div>
                        <div class="resume-position-time">
                          {{ course["disc"] }}
                        </div>
                      </div>
                      <!--//resume-timeline-item-header-->
                      <div class="resume-timeline-item-desc">
                        <p>
                          {{ course["disc"] }}
                        </p>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div class="col-lg-3">
            <section class="resume-section skills-section mb-5">
              <h2
                class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3"
              >
                Skills
              </h2>
              <div class="resume-section-content">
                <div class="resume-skill-item">
                  <ul
                    class="list-unstyled mb-4"
                    v-for="skill in this.$store.state.skills"
                    :key="skill"
                  >
                    <li class="mb-2">
                      <div class="resume-skills-cat font-weight-bold">
                        {{ skill }}
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="resume-skill-item">
                <h4
                  class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3"
                >
                  Languages
                </h4>
                <ul class="list-unstyled resume-section-content">
                  <li
                    class="mb-2"
                    v-for="language in this.$store.state.languages"
                    :key="language"
                  >
                    <div class="resume-skill-name">
                      {{ Object.keys(language)[0] }}
                    </div>
                    <div class="progress resume-progress">
                      <div
                        class="progress-bar theme-progress-bar-dark"
                        role="progressbar"
                        :style="{ width: Object.values(language)[0] + '%' }"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "theme-4",
  computed: {
    personal() {
      return this.$store.state.personal;
    },
    myjob() {
      return this.$store.state.jobs;
    },
    mycourse() {
      return this.$store.state.course;
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

.progress {
  border-radius: 2px;
}

.resume-header {
  background: $profileBg;
  color: rgba(255, 255, 255, 0.9);
  height: 220px;
}

.resume-header .picture {
  width: 220px;
}

.resume-header .name {
  font-size: 2.25rem;
  letter-spacing: 0.175rem;
  font-weight: 900;
}

.resume-header .title {
  font-size: 1.5rem;
}

.resume-header a {
  color: rgba(255, 255, 255, 0.6);
}

.resume-social {
  font-size: 0.875rem;
  margin-right: 2rem;
  .container-social {
    margin-right: 1rem;
  }
}

.resume-social .fa-container {
  font-size: 1rem;
  display: inline-block;
  width: 24px;
  height: 24px;
  border-radius: 0.125rem;
  background: white;
  color: #434e5e;
}

.resume-section-title {
  font-size: 1.25rem;
  position: relative;
  color: $linkColor;
}

.resume-section-title:after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1.5px;
  background: $linkColor;
}

.resume-section-content {
  color: #58677c;
}

.resume-timeline {
  padding-left: 2rem;
}

.resume-timeline:before {
  content: "";
  display: inline-block;
  width: 3px;
  height: 100%;
  background: $profileBg;
  left: 6px;
  top: 4px;
  position: absolute;
}

.resume-timeline-item:before {
  content: "";
  display: inline-block;
  position: absolute;
  left: -32px;
  top: 3px;
  width: 15px;
  height: 15px;
  border: 4px solid #58677c;
  background: white;
  border-radius: 50%;
}

.resume-progress {
  height: 0.6rem;
}

.resume-company-name {
  color: #58677c;
  font-size: 0.875rem;
  font-weight: 500;
}

.resume-position-time {
  font-size: 0.875rem;
  color: #aab4c3;
}

.resume-position-title {
  font-size: 1.125rem;
  color: #434e5e;
}

.resume-timeline-item-desc-heading {
  font-size: 1rem;
}

.resume-skills-cat {
  font-size: 1rem;
  color: #434e5e;
}

.resume-skill-name {
  font-size: 0.8125rem;
  color: #434e5e;
}

.resume-degree {
  color: #434e5e;
}

.resume-degree-org {
  font-size: 0.875rem;
}

.resume-degree-time {
  color: #aab4c3;
  font-size: 0.875rem;
}

.resume-award-icon {
  left: 0;
  top: 4px;
  color: #aab4c3;
}

.resume-award-name {
  font-weight: bold;
  color: #434e5e;
}

.resume-award-desc {
  font-size: 0.875rem;
}

.resume-lang-name {
  color: #434e5e;
}

.footer .fa-heart {
  color: #fb866a;
}

.media-body {
  justify-content: space-between;
  flex-wrap: nowrap;
}

.primary-list {
  margin-left: 15%;
  li {
    margin-bottom: 10px;
    text-align: left;
  }
  svg {
    margin-right: 10px;
  }
}

.resume-position-title {
  margin-right: 10px;
}

.resume-body {
  background-color: $secondBg;
}

.progress-bar {
  background-color: $linkColor !important ;
}

@media (max-width: 767.98px) {
  .resume-wrapper {
    padding-top: 0;
  }
  .resume-header {
    height: auto;
  }
  .resume-header .picture {
    width: 120px;
    border-radius: 4px;
  }
}
</style>
