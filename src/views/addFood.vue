<template>
  <h2>New Item</h2>

  <form @submit.prevent="foodPost" method="post">
    <div class="container">
      <label for="fType"><b>Food type</b></label>
      <input type="text" placeholder="Enter Food Type" name="fType" required />

      <label for="fName"><b>Food Name</b></label>
      <input type="text" placeholder="Enter Food Name" name="fName" required />

      <label for="ingredients"><b>ingredients</b></label>
      <input type="text" placeholder="Enter The Igredients" name="ingredients" required />

      <label for="pLink"><b>Food Photo</b></label>
      <input type="file" name="pLink" />

      <button type="submit">{{ Type }}</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "addFood",
  props: {
    Type: "",
  },
  data() {
    return {
      rememberState: true,
    };
  },
  methods: {
    foodPost(){
      console.log("test")
    }
  }
};
</script>

<style scoped>
input[type="text"],
input[type="password"],
input[type="file"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: none;
  border-bottom: 1px solid #ccc;
  box-sizing: border-box;
}

button {
  background-color: #04aa6d;
  color: white;
  padding: 14px 20px;
  margin: 8px auto;
  border: none;
  cursor: pointer;
  width: 100%;
  border-radius: 10%;
}

button:hover {
  opacity: 0.8;
}

.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
}

img.avatar {
  width: 40%;
  border-radius: 50%;
}

.container {
  padding: 16px;
}

span.psw {
  float: right;
  padding-top: 16px;
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
    display: block;
    float: none;
  }
}
@media screen and (min-width: 301px) {
  .container{
    width: 80%;
    margin: 5px auto;
  }
}
@media screen and (min-width: 720px) {
  .container{
    width: 60%;
    margin: 10px auto;
  }
}
</style>