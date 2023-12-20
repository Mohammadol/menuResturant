<template>
  <RnavBar></RnavBar>
  <div class="flexcontainer">
    <div class="card">
      <img src="../assets/fruits1.jpg" alt="Avatar" style="width: 100%" />
      <div class="container">
        <h4><b>John Doe</b></h4>
        <p>Architect & Engineer</p>
      </div>
    </div>
    <div class="card">
      <img src="../assets/امبراطور.webp" alt="Avatar" style="width: 100%" />
      <div class="container">
        <h4><b>John Doe</b></h4>
        <p>Architect & Engineer</p>
      </div>
    </div>
    <div class="card">
      <img src="../assets/كوكتيل.png" alt="Avatar" style="width: 100%" />
      <div class="container">
        <h4><b>John Doe</b></h4>
        <p>Architect & Engineer</p>
      </div>
    </div>
    <div class="card">
      <img src="../assets/ميلك شيك.jpeg" alt="Avatar" style="width: 100%" />
      <div class="container">
        <h4><b>John Doe</b></h4>
        <p>Architect & Engineer</p>
      </div>
    </div>
    <div class="card">
      <img src="../assets/fruits1.jpg" alt="Avatar" style="width: 100%" />
      <div class="container">
        <h4><b>John Doe</b></h4>
        <p>Architect & Engineer</p>
      </div>
    </div>
    <div class="card">
      <img src="../assets/امبراطور.webp" alt="Avatar" style="width: 100%" />
      <div class="container">
        <h4><b>John Doe</b></h4>
        <p>Architect & Engineer</p>
      </div>
    </div>
    <div class="card">
      <img src="../assets/كوكتيل.png" alt="Avatar" style="width: 100%" />
      <div class="container">
        <h4><b>John Doe</b></h4>
        <p>Architect & Engineer</p>
      </div>
    </div>
    <div class="card">
      <img src="../assets/ميلك شيك.jpeg" alt="Avatar" style="width: 100%" />
      <div class="container">
        <h4><b>John Doe</b></h4>
        <p>Architect & Engineer</p>
      </div>
    </div><div class="card">
      <img src="../assets/fruits1.jpg" alt="Avatar" style="width: 100%" />
      <div class="container">
        <h4><b>John Doe</b></h4>
        <p>Architect & Engineer</p>
      </div>
    </div>
    <div class="card">
      <img src="../assets/امبراطور.webp" alt="Avatar" style="width: 100%" />
      <div class="container">
        <h4><b>John Doe</b></h4>
        <p>Architect & Engineer</p>
      </div>
    </div>
    <div class="card">
      <img src="../assets/كوكتيل.png" alt="Avatar" style="width: 100%" />
      <div class="container">
        <h4><b>John Doe</b></h4>
        <p>Architect & Engineer</p>
      </div>
    </div>
    <div class="card">
      <img src="../assets/ميلك شيك.jpeg" alt="Avatar" style="width: 100%" />
      <div class="container">
        <h4><b>John Doe</b></h4>
        <p>Architect & Engineer</p>
      </div>
    </div>
    <div class="card">
      <img src="../assets/fruits1.jpg" alt="Avatar" style="width: 100%" />
      <div class="container">
        <h4><b>John Doe</b></h4>
        <p>Architect & Engineer</p>
      </div>
    </div>
    <div class="card">
      <img src="../assets/امبراطور.webp" alt="Avatar" style="width: 100%" />
      <div class="container">
        <h4><b>John Doe</b></h4>
        <p>Architect & Engineer</p>
      </div>
    </div>
    <div class="card">
      <img src="../assets/كوكتيل.png" alt="Avatar" style="width: 100%" />
      <div class="container">
        <h4><b>John Doe</b></h4>
        <p>Architect & Engineer</p>
      </div>
    </div>
    <div class="card">
      <img src="../assets/ميلك شيك.jpeg" alt="Avatar" style="width: 100%" />
      <div class="container">
        <h4><b>John Doe</b></h4>
        <p>Architect & Engineer</p>
      </div>
    </div>
    
  </div>
</template>

<script>
import RnavBar from "../components/RnavBar.vue";
export default {
  
  components:{
    RnavBar,
  },
  name: "resturant",
  props: {
    Type: "String",
  },
  data() {
    return {
      rememberState: true,
    };
  },
};
</script>

<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  padding:15px;
  margin:15px;
  max-width:200px;
  border-style: solid;
  border-color: #ffc501;
  border-radius:0 0 0 25px;
}
img{
  max-height: 200px;
  object-fit: cover;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.container {
  padding: 2px 16px;
}
.flexcontainer {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;
}
</style>