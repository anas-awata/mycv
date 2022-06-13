<template>
  <mynav />
  <div class="home-container">
    <div class="circle"></div>
    <div class="row">
      <div class="col-md-6 textcv">
        <h1>Create the best CV</h1>
        <p class="disc">
          Use our CV Editor with multiple templates. to Get your new CV in just
          a few minutes.
        </p>
        <div class="container">
          <ol>
            <li green>pick a template</li>
            <li green>Fill your information</li>
            <li green>Download your CV</li>
            <li green>get the job !</li>
          </ol>
        </div>
        <div class="box-action-button">
          <router-link to="/templates" custom v-slot="{ navigate }">
            <button class="btn btn-success" @click="navigate" role="link">
              Create my CV
            </button>
          </router-link>
        </div>
      </div>
      <div class="col-md-6">
        <div class="">
          <div class="image-cv shadow-brand">
            <img src="../pics/themetwo.jpeg" alt="cvimage" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mynav from "../components/myNav.vue";
export default {
  name: "my-home",
  components: { mynav },
};
</script>
<style scoped>
.home-container {
}
body {
  height: 100%;
  background-image: url(../assets/wave-haikei.svg) !important;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.textcv {
  font-family: "system-ui";
  font-size: x-large;
  margin-top: 10%;
}
h1 {
  font-size: xxx-large;
}
img {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  border-radius: 20px;
  width: 65%;
  height: 50%;
  margin-top: 20%;
}
.btn {
  padding: 3% 15%;
  margin-top: 3%;
  border-radius: 40px;
  font-size: 100%;
}
@media screen and (max-width: 768px) {
  img {
    margin-top: 18%;
    width: 75%;
  }
  .textcv {
    margin-top: 20%;
    font-size: large;
  }
  .disc {
    white-space: pre-wrap;
    margin-left: 10px;
  }
  h1 {
    font-size: xx-large;
  }
}
body,
html {
  background: #eee !important;
}
.container {
  text-align: left;
  width: 100%;
}

h3 {
  margin-bottom: 1em;
}

ol {
  list-style-type: none;
  margin-left: 0;
}

ol > li {
  counter-increment: customlistcounter;
  margin-bottom: 1em;
}

ol > li:before {
  content: counter(customlistcounter) "";
  color: #fff;
  font-weight: bold;
  background-color: #000;
  margin-right: 0.2em;
  padding: 0.1em 0.4em 0.1em;
  border-radius: 10em;
}

ol:first-child {
  counter-reset: customlistcounter;
}

ol[green] > li:before,
li[green]:before {
  background-color: #66cc99;
}

ol[shadow] > li:before,
li[shadow]:before {
  box-shadow: 3px 3px #000;
  margin-right: 0.4em;
}

[outline] > li,
[shadow] > li {
  margin-bottom: 1.2em;
}

ol[outline] > li:before,
li[outline]:before {
  color: #000;
  background-color: #fff;
  border: 1px solid #000;
}
</style>
