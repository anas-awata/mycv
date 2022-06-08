<template>
  <div class="row">
    <div class="skill-section col-11">
      <h3 class="section-title">Skills</h3>
      <!-- YOUR SET OF SKILLS  -->
      <ul class="skill-ul">
        <li v-for="skill in this.$store.state.skills" :key="skill" class="pill">
          {{ skill }}
        </li>
      </ul>
    </div>
  </div>
  <div class="language-section">
    <h3 class="section-title">Languages</h3>
    <!-- YOUR SET OF Languages  -->
    <ul class="skill-ul">
      <li v-for="language in this.$store.state.languages" :key="language">
        {{ Object.keys(language)[0] }}
        <div class="progress">
          <div
            class="bar"
            :style="{ width: Object.values(language)[0] + '%' }"
          ></div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "study-info",
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.progress {
  margin: 20px auto;
  padding: 0;
  width: 90%;
  height: 15px;
  overflow: hidden;
  background: #e5e5e5;
  border-radius: 6px;
}
li {
  list-style: none;
}
</style>
