<template>
  <div class="container" v-if="myStudy[0]">
    <h3 class="experience-title">Study Information</h3>
    <div class="experience-wrapper">
      <div v-for="study in myStudy" :key="study">
        <div v-if="study">
          <div class="company-wrapper clearfix">
            <div class="experience-title">{{ study["spec"] }}</div>
            <div class="experience-title">{{ study["location"] }}</div>
            <!-- NAME OF THE uni YOUSTUDY WITH  -->
            <div class="time">
              {{ study["from"].substring(0, 7) }} -
              {{ study["to"].substring(0, 7) }}
            </div>
            <!-- THE TIME YOU STUDY WITH THE uni  -->
          </div>

          <div class="job-wrapper clearfix">
            <div class="experience-title">
              {{ study["university"] }}
            </div>
            <!-- study spec  -->
            <div class="company-description">
              <p>
                {{ study["disc"] }}
              </p>
              <!-- study DESCRIPTION  -->
            </div>
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
