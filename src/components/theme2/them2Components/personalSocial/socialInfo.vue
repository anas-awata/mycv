<template>
  <div class="contact-info clearfix">
    <ul class="list-logos">
      <li v-if="social['LinkedIn']"><i class="fa-brands fa-linkedin"> </i></li>
      <li v-if="social['Twitter']"><i class="fa-brands fa-twitter"> </i></li>
      <li v-if="social['Instagram']">
        <i class="fa-brands fa-instagram"> </i>
      </li>
      <li v-if="social['Facebook']"><i class="fa-brands fa-facebook"> </i></li>
      <li v-if="social['Github']"><i class="fa-brands fa-github"> </i></li>
    </ul>
    <ul class="list-titles">
      <li v-if="social['LinkedIn']">LinkedIn</li>
      <li v-if="social['Twitter']">Twitter</li>
      <li v-if="social['Instagram']">Instagram</li>
      <li v-if="social['Facebook']">Facebook</li>
      <li v-if="social['Github']">gitHub</li>
    </ul>
    <ul class="list-content">
      <li v-if="social['LinkedIn']">{{ social["LinkedIn"] }}</li>
      <!-- YOUR linkedIn USER  -->
      <li v-if="social['Twitter']">{{ social["Twitter"] }}</li>
      <!-- YOUR Twitter USER  -->
      <li v-if="social['Instagram']">{{ social["Instagram"] }}</li>
      <!-- YOUR Instagram USER  -->
      <li v-if="social['Facebook']">{{ social["Facebook"] }}</li>
      <!-- YOUR Facebook USER  -->
      <li v-if="social['Github']">{{ social["Github"] }}</li>
      <!-- YOUR github USER  -->
    </ul>
  </div>
</template>

<script>
export default {
  name: "social-info",
  data() {
    return {
      linkedIn: "",
      twitter: "",
      instagram: "",
      facebook: "",
      gitHub: "",
    };
  },
  computed: {
    social() {
      return this.$store.state.social;
    },
  },
};
</script>

<style lang="scss" scoped>
li {
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
  margin-left: -18px;
}
.list-content {
  margin-left: 12%;
}
</style>
