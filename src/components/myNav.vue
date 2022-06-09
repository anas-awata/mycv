<template>
  <div class="navbar">
    <div class="navbar-brand">
      <img src="../assets/logo.png" alt="lighting" />
      C<span class="v">V</span>tron
    </div>
    <div id="link-group" class="link-group">
      <ul>
        <li class="nav-link">
          <router-link class="cvselectorlink" to="/templates">
            <span class="material-icons">Templates</span>templates</router-link
          >
        </li>
        <li class="nav-link">
          <a href="/"><span class="material-icons">home</span>Home</a>
        </li>
      </ul>
    </div>
    <!--
    <div class="mobile-btn">
      <span onclick="menuOpen();" id="open" class="material-icons open"
        >menu</span
      >
      <span onclick="menuClose();" id="close" c class="material-icons close"
        >close</span
      >
    </div> -->
  </div>
</template>

<script>
export default {
  name: "my-nav",
};
</script>
<style lang="scss" scoped>
body {
  .navbar {
    display: flex;
    width: 100%;
    height: 80px;
    font-family: "Source Sans Pro", sans-serif;
    flex-wrap: nowrap;
    box-shadow: rgba(0, 0, 0, 0.01) 0px 20px 25px -5px,
      rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
    margin-bottom: 5%;
    position: fixed;
    z-index: 30000;
    background-color: #fff;
    top: 0;
    .navbar-brand {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 160px;
      height: 80px;
      float: left;
      user-select: none;
      font-size: 1.7em;
      font-family: cursive;
      font-style: italic;
      img {
        height: 80%;
        margin-right: -12px;
        margin-left: 15px;
      }
    }
    .link-group {
      display: flex;
      float: right;
      width: 100%;
      height: 100%;
      justify-content: end;
      transition: 1s;
      ul {
        position: relative;
        right: 100px;
        float: right;
        list-style: none;
        li {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 80px;
          height: 80%;
          float: left;
          padding: 10px;
          font-size: 20px;
          font-weight: 600;
          cursor: pointer;
          margin: 0px 10px;
          a {
            text-decoration: none;
            color: #66cc99;
            span {
              display: none;
            }
          }
          &:hover {
            border-bottom: 2px solid #66cc99;
          }
        }
      }
    }
    .mobile-btn {
      display: none;
    }
  }
}
.v {
  color: #1be947;
  font-size: 35px;
}
@media screen and (max-width: 768px) {
  body {
    .navbar {
      height: 50px;
      margin-bottom: 0%;
      position: fixed;
      z-index: 30000;
      background-color: #fff;
      top: 0;
    }
  }
}
/*body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
    .navbar {
      .link-group {
        width: 350px;
        height: auto;
        position: absolute;
        background-color: rgba(0, 0, 0, 0.2);
        float: right;
        right: -100%;
        top: 80px;
        user-select: none;
        border-radius: 10px 0px 0px 10px;
        ul {
          height: 100%;
          right: 11%;
          li {
            justify-content: start;
            width: 95%;
            height: 60px;
            margin-bottom: 10px;
            padding: 20px;
            border-radius: 5px;
            a {
              display: flex;
              justify-content: center;
              align-items: center;
              span {
                display: block;
                padding: 0px 16px;
              }
            }
            &:hover {
              background-color: darkgray;
              border: none;
            }
          }
        }
      }
      .mobile-btn {
        position: absolute;
        float: right;
        right: 20px;
        top: 10px;
        display: block;
        user-select: none;
        span {
          color: #66cc99;
          font-size: 60px;
        }
        .open {
          cursor: pointer;
        }
        .close {
          cursor: pointer;
          display: none;
          color: maroon;
        }
      }
    }
  }
}*/
</style>
