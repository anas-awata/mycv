<template>
  <div class="home-container">
    <div class="circle"></div>
    <div class="row">
      <div class="col-md-6 textcv">
        <h1>Create your best CV Quickly</h1>
        <p class="disc">
          Use our professionally reviewed and tested CV templates. Get your new
          CV ready to download in just a few minutes.
        </p>
        <div class="box-action-button">
          <router-link to="/pdf" custom v-slot="{ navigate }">
            <button class="btn btn-success" @click="navigate" role="link">
              Create my CV
            </button>
          </router-link>
        </div>
      </div>
      <div class="col-md-6">
        <div class="">
          <div class="image-cv shadow-brand">
            <img
              src="https://images.creativemarket.com/0.1.0/ps/6637665/2500/2500/m1/fpnw/wm0/01_clean-professional-creative-and-modern-resume-cv-curriculum-vitae-design-template-ms-word-apple-pages-psd-free-download-.jpg?1562417337&s=f9aaf2025d1fd63a6fc7e6e809d9b448"
              alt="cvimage"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-home",
};
</script>
<style scoped>
.home-container {
  margin-top: 23%;
}
.textcv {
  font-family: "system-ui";
  font-size: x-large;
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
  margin-top: -25%;
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
body {
  height: 80%;
}
</style>
