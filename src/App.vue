<template>
  <navBar></navBar>
  <router-view Type="Add"></router-view>
</template>
<script>
  import navBar from './components/navBar.vue';

export default {
  components: {
    navBar
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
