<template>
  <div id="app">
    <router-view></router-view>
    <i
      id="dropDown"
      class="fa fa-bars"
      style="font-size:30px"
      @click.prevent="showSideBar"
    ></i>
    <div id="sideBar" class="leftSide">
      <div class="img">
        <i
          id="dropDown"
          class="fa fa-bars"
          style="font-size:35px"
          @click.prevent="showSideBar"
        ></i>

        <img src="src\Assets\me.jpg" />
        <h4>
          Kenan Haskić<br />
          Web Developer
        </h4>
      </div>
      <div class="navbar">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About me</router-link></li>
          <li><router-link to="/projects">Projects</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      show: false
    };
  },
  methods: {
    showSideBar() {

      this.show = !this.show;
      if (this.show) {
        document.getElementById("sideBar").style.display = "block";
      } else {
        document.getElementById("sideBar").style.display = "none";
      }
    }
  },
  created() {
    if (window.outerWidth >= 768) this.show = true;
  }
};
</script>
<style>
body {
  background-image: url("./Assets/bbgg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  color: white;
  margin: 0;
  font-family: Roboto, Arial, sans-serif;
  /*background-color: #43A047;*/
}
.leftSide {
  background-color: rgb(22, 22, 22);
  position: relative;
  height: 100vh;
  width: 35vh;
  margin: 0;
  opacity: 100%;
  border-right: 1px solid grey;
  display: inline-block;
  top: 0;
}
.img {
  text-align: center;
  width: 100%;
}
img {
  margin-top: 4%;
  width: 70%;
}
.navbar {
  margin-top: 20%;
  text-align: center;
  text-transform: uppercase;
}
a {
  text-decoration: none;
  margin-top: 10px;
  color: aliceblue;
}
ul {
  padding: 0;
}
ul li {
  padding: 30px 0;
  list-style: none;
}
#dropDown {
  position: absolute;
  margin: 1% 1%;
  display: none;
}

@media screen and (min-width: 320px) {
  #dropDown {
    display: block;
    margin: 1% 1%;
  }
  body,
  h4 {
    font-size: 4vw;
  }
  img {
    margin-top: 40px;
  }
  ul li {
    padding: 22px;
  }
}
@media screen and (min-width: 375px) {
  body,
  h4 {
    font-size: 3.5vw;
  }
}
@media screen and (min-width: 425px) {
  body,
  h4 {
    font-size: 3vw;
  }
}
@media screen and (min-width: 768px) {
  body,
  h4 {
    font-size: 2vw;
  }
  img {
    margin-top: 40px;
  }
  ul li {
    padding: 22px;
  }
  #dropDown {
    display: none;
    margin: 1% 1%;
  }
  .leftSide {
    display: block;
  }
}
@media screen and (min-width: 1024px) {
  body, h4{
    font-size: 1.5vw;
  }
  ul li {
    padding: 25px;
  }
  #dropDown {
    display: none;
  }
  .leftSide {
    display: block;
  }
}
@media screen and (min-width: 1440px) {
  body,
  h4 {
    font-size: 1.3vw;
  }
  ul li {
    padding: 23px;
  }
  #dropDown {
    display: none;
  }
  .leftSide {
    display: block;
  }
}
</style>
