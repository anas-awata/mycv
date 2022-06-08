<template>
  <div class="name-wrapper row">
    <h1 class="col-12">
      {{ personal["Fname"] }} <br />{{ personal["Lname"] }}
    </h1>
    <!-- YOUR NAME AND LAST NAME  -->
    <h4 class="col-12 job-tilte">{{ personal["Jtitle"] }}</h4>
    <!-- YOUR JOB TITLE  -->
  </div>

  <div class="contact-presentation">
    <!-- YOUR PRESENTATION RESUME  -->
    <p class="bold">
      {{ personal["About"] }}
    </p>
  </div>
  <div class="contact-info clearfix">
    <ul class="list-logos">
      <li><i class="fa-solid fa-phone"> </i></li>
      <li><i class="fa-solid fa-envelope"> </i></li>
      <li><i class="fa-solid fa-home"> </i></li>
    </ul>
    <ul class="list-titles">
      <li>Call</li>
      <li>Mail</li>
      <li>Home</li>
    </ul>
    <ul class="list-content">
      <li>{{ personal["Phone"] }}</li>
      <!-- YOUR PHONE NUMBER  -->
      <li>{{ personal["Email"] }}</li>
      <!-- YOUR EMAIL -->
      <li>{{ personal["Address"] }}</li>
      <!-- YOUR STATE AND COUNTRY  -->
    </ul>
  </div>
</template>

<script>
export default {
  name: "my-description",
  data() {
    return {
      Firstname: "",
      Lastname: "",
      Jobtitle: "",
      email: "",
      phone: "",
      address: "",
      about: "",
    };
  },
  computed: {
    personal() {
      return this.$store.state.personal;
    },
  },
};
</script>

<style lang="scss" scoped>
.name-wrapper {
  float: left;
  width: 60%;
  position: absolute;
  top: 2%;
  padding-bottom: 3%;
}
.list-logos {
  float: left;
  text-align: left;
  font-weight: 600;
  width: 10%;
  color: #4a4e51;
  margin-left: -18px;
}
li {
  list-style: none;
}
.list-content {
  white-space: nowrap;
}
.job-tilte {
  text-align: left;
}
</style>
