<template>
  <div id="app">
    <img alt="neck logo" class="neckLogo" src="./assets/images/nec-exp.png">
    <img alt="body logo" class="bodyLogo" src="./assets/images/bod-expl.png">
    <HelloWorld msg="Guitar configurator !"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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
