<template>
  <navBar></navBar>
  <router-view Type="Add"></router-view>
  <SpeedInsights/>
</template>
<script>
  import navBar from './components/navBar.vue';
  import {SpeedInsights} from "@vercel/speed-insights/vue"

export default {
  components: {
    navBar,
    SpeedInsights
  }
}
</script>

<style>
body{
  margin: 0%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0;
  margin: 1 auto;
}
</style>
