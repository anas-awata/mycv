<template>
  <div class="container">
    <h3 class="experience-title">Study Information</h3>

    <div class="experience-wrapper">
      <div class="company-wrapper clearfix" v-if="myStudy[0]">
        <div class="experience-title">{{ myStudy[0]["spec"] }}</div>
        <div class="experience-title">{{ myStudy[0]["location"] }}</div>
        <!-- NAME OF THE uni YOUSTUDY WITH  -->
        <div class="time">
          {{ myStudy[0]["from"].substring(0, 7) }} -
          {{ myStudy[0]["to"].substring(0, 7) }}
        </div>
        <!-- THE TIME YOU STUDY WITH THE uni  -->
      </div>

      <div class="job-wrapper clearfix">
        <div class="experience-title">
          {{ myStudy[0]["university"] }}
        </div>
        <!-- study spec  -->
        <div class="company-description">
          <p>
            {{ myStudy[0]["disc"] }}
          </p>
          <!-- study DESCRIPTION  -->
        </div>
      </div>
      <div v-if="myStudy[1]">
        <div class="company-wrapper clearfix">
          <div class="experience-title">{{ myStudy[1]["spec"] }}</div>
          <div class="experience-title">{{ myStudy[1]["location"] }}</div>
          <!-- NAME OF THE uni YOUSTUDY WITH  -->
          <div class="time">
            {{ myStudy[1]["from"].substring(0, 7) }} -
            {{ myStudy[1]["to"].substring(0, 7) }}
          </div>
          <!-- THE TIME YOU STUDY WITH THE uni  -->
        </div>

        <div class="job-wrapper clearfix">
          <div class="experience-title">
            {{ myStudy[1]["university"] }}
          </div>
          <!-- study spec  -->
          <div class="company-description">
            <p>
              {{ myStudy[1]["disc"] }}
            </p>
            <!-- study DESCRIPTION  -->
          </div>
        </div>
      </div>

      <div v-if="myStudy[2]">
        <div class="company-wrapper clearfix">
          <div class="experience-title">{{ myStudy[2]["spec"] }}</div>
          <div class="experience-title">{{ myStudy[2]["location"] }}</div>
          <!-- NAME OF THE uni YOUSTUDY WITH  -->
          <div class="time">
            {{ myStudy[2]["from"].substring(0, 7) }} -
            {{ myStudy[2]["to"].substring(0, 7) }}
          </div>
          <!-- THE TIME YOU STUDY WITH THE uni  -->
        </div>

        <div class="job-wrapper clearfix">
          <div class="experience-title">{{ myStudy[2]["university"] }}</div>
          <!-- study spec  -->
          <div class="company-description">
            <p>
              {{ myStudy[2]["disc"] }}
            </p>
            <!-- study DESCRIPTION  -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "study-info",
  data() {
    return {};
  },
  computed: {
    myStudy() {
      return this.$store.state.study;
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
