<template>
  <div class="container" v-if="mycourse[0]">
    <h3 class="experience-title">COURSES</h3>

    <div class="experience-wrapper">
      <div v-for="course in mycourse" :key="course">
        <div v-if="course">
          <div class="company-wrapper clearfix">
            <div class="experience-title">{{ course["coursetitle"] }}</div>
            <div class="experience-title">{{ course["location"] }}</div>
            <!-- NAME OF THE COMPANY YOUWORK WITH  -->
            <div class="time">
              {{ course["from"].substring(0, 7) }} -
              {{ course["to"].substring(0, 7) }}
            </div>
            <!-- THE TIME YOU WORK WITH THE COMPANY  -->
          </div>

          <div class="job-wrapper clearfix">
            <div class="experience-title">
              {{ course["platform"] }}
            </div>
            <!-- JOB TITLE  -->
            <div class="company-description">
              <p>
                {{ course["disc"] }}
              </p>
              <!-- JOB DESCRIPTION  -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "work-info",
  data() {
    return {};
  },
  computed: {
    mycourse() {
      console.log(this.$store.state.course);
      return this.$store.state.course;
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
