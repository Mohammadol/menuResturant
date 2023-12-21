<template>
  <div class="topnav" id="myTopnav">
    <router-link :to="{x}">{{ResturantName}}</router-link>
    <router-link to="/add">Gallary</router-link>
    <router-link to="/edit/:id">About</router-link>
    <a href="javascript:void(0);" class="icon" @click="navTog()">
      <i class="material-icons" style="font-size:15px">menu</i>
    </a>
  </div>
</template>
<script>
export default {
  name: "navBar",
  props:{
    ResturantName:""
  },
  data() {
    return {
      x:this.$route.params.id
    };
  },
  methods: {
    navTog() {
      document.getElementById("myTopnav").classList.toggle("responsive");
    },
  },
};
</script>

<style scoped>
.topnav {
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  padding: 0%;
  margin: 0%;
  border-bottom: 3px solid #ffc501;
  margin-bottom: 25px;
}

.topnav a {
  float: left;
  display: block;
  color: #f0f0f0;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  text-shadow: 1px 1px 3px black;
}

.topnav a:hover {
  background-color: #ddd;
  color: white;
  text-shadow: 2px 2px 5px f0f0f0;
  border-radius:0 0 0 25%;
}

.topnav .router-link-exact-active {
  background-color: rgba(0, 0, 0, 1);
  color: #ffc501;
}

.topnav .icon {
  display: none;
}

@media screen and (max-width: 600px) {
  .topnav a:not(:first-child) {
    display: none;
  }
  .topnav a.icon {
    float: right;
    display: block;
  }
}

@media screen and (max-width: 600px) {
  .topnav.responsive {
    position: relative;
  }
  .topnav.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
    border-bottom: 1px solid gray;
  }
}
</style>