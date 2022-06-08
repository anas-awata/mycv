<template>
  <div class="container">
    <h3 class="experience-title">EXPERIENCE</h3>

    <div class="experience-wrapper">
      <div class="company-wrapper clearfix" v-if="myjob[0]">
        <div class="experience-title">{{ myjob[0]["jobtitle"] }}</div>
        <div class="experience-title">{{ myjob[0]["location"] }}</div>
        <!-- NAME OF THE COMPANY YOUWORK WITH  -->
        <div class="time">
          {{ myjob[0]["from"].substring(0, 7) }} -
          {{ myjob[0]["to"].substring(0, 7) }}
        </div>
        <!-- THE TIME YOU WORK WITH THE COMPANY  -->
      </div>

      <div class="job-wrapper clearfix">
        <div class="experience-title">
          {{ myjob[0]["company"] }}
        </div>
        <!-- JOB TITLE  -->
        <div class="company-description">
          <p>
            {{ myjob[0]["disc"] }}
          </p>
          <!-- JOB DESCRIPTION  -->
        </div>
      </div>
      <div v-if="myjob[1]">
        <div class="company-wrapper clearfix">
          <div class="experience-title">{{ myjob[1]["jobtitle"] }}</div>
          <div class="experience-title">{{ myjob[1]["location"] }}</div>
          <!-- NAME OF THE COMPANY YOUWORK WITH  -->
          <div class="time">
            {{ myjob[1]["from"].substring(0, 7) }} -
            {{ myjob[1]["to"].substring(0, 7) }}
          </div>
          <!-- THE TIME YOU WORK WITH THE COMPANY  -->
        </div>

        <div class="job-wrapper clearfix">
          <div class="experience-title">
            {{ myjob[1]["company"] }}
          </div>
          <!-- JOB TITLE  -->
          <div class="company-description">
            <p>
              {{ myjob[1]["disc"] }}
            </p>
            <!-- JOB DESCRIPTION  -->
          </div>
        </div>
      </div>

      <div v-if="myjob[2]">
        <div class="company-wrapper clearfix">
          <div class="experience-title">{{ myjob[2]["jobtitle"] }}</div>
          <div class="experience-title">{{ myjob[2]["location"] }}</div>
          <!-- NAME OF THE COMPANY YOUWORK WITH  -->
          <div class="time">
            {{ myjob[2]["from"].substring(0, 7) }} -
            {{ myjob[2]["to"].substring(0, 7) }}
          </div>
          <!-- THE TIME YOU WORK WITH THE COMPANY  -->
        </div>

        <div class="job-wrapper clearfix">
          <div class="experience-title">{{ myjob[2]["company"] }}</div>
          <!-- JOB TITLE  -->
          <div class="company-description">
            <p>
              {{ myjob[2]["disc"] }}
            </p>
            <!-- JOB DESCRIPTION  -->
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
    myjob() {
      console.log(this.$store.state.jobs);
      return this.$store.state.jobs;
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
