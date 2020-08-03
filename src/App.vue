<template>
  <div id="app">
    <div class="logo">
      <img alt="neck logo" class="neckLogo" src="./data/builderImages/nec-exp.png">
      <img alt="body logo" class="bodyLogo" src="./data/builderImages/bod-exp.png">
    </div>
    <GuitarBuilder />
    <Footer></Footer>
  </div>
</template>

<script>
import GuitarBuilder from './components/GuitarBuilder.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    GuitarBuilder,
    Footer,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
body {
  margin:0 auto;
  padding: 0;
  background-image: url('./assets/images/backSite-mob.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  height:100vh;
}
#app {
  width:100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  padding-top: 15px;
  margin: 0 auto;
}
.logo {
  display: inline-block;
  transform: rotate(65deg);
  margin-top:-60px;
}
.neckLogo {
  position: relative;
  z-index: 2;
  display: block;
  margin: 0 auto;
  width:45px;
  padding-left:11px;
}
.bodyLogo {
 display: block;
 margin:0 auto;
 width:85px;
 margin-top:-31px;
}
</style>
