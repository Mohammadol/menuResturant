<template>
  <div class="flexcontainer">
    <div class="card">
      <img src="" alt="Avatar" style="width: 100%" />
      <div class="container">
        <h4><b>John Doe</b></h4>
        <p>Architect & Engineer</p>
      </div>
    </div>
    <div class="card">
      <img src="" alt="Avatar" style="width: 100%" />
      <div class="container">
        <h4><b>John Doe</b></h4>
        <p>Architect & Engineer</p>
      </div>
    </div>
    <div class="card">
      <img src="" alt="Avatar" style="width: 100%" />
      <div class="container">
        <h4><b>John Doe</b></h4>
        <p>Architect & Engineer</p>
      </div>
    </div>
    <div class="card">
      <img src="" alt="Avatar" style="width: 100%" />
      <div class="container">
        <h4><b>John Doe</b></h4>
        <p>Architect & Engineer</p>
      </div>
    </div>
    <div class="card">
      <img src="" alt="Avatar" style="width: 100%" />
      <div class="container">
        <h4><b>John Doe</b></h4>
        <p>Architect & Engineer</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
  margin: 15px auto;
  max-width:200px
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.container {
  padding: 2px 16px;
}
.flexcontainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
</style>