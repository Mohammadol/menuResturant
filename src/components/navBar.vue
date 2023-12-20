<template>
  <div class="topnav" id="myTopnav">
    <router-link to="/">Dashboard</router-link>
    <router-link to="/resturant">Add</router-link>
    <router-link to="/add">Edit</router-link>
    <router-link to="/resturant/:id">no bar</router-link>
    <a href="javascript:void(0);" class="icon" @click="navTog()">
      <i class="material-icons" style="font-size:15px">menu</i>
    </a>
  </div>
</template>
<script>
export default {
  name: "navBar",
  data() {
    return {};
  },
  methods: {
    navTog() {
      document.getElementById("myTopnav").classList.toggle("responsive");
    },
  },
};
</script>

<style>
.topnav {
  overflow: hidden;
  background-color: #333;
  padding: 0%;
  margin: 0%;
}

.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav .router-link-exact-active {
  background-color: #04aa6d;
  color: white;
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
  }
}
</style>