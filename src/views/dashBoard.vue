<template>
  <div class="container">
    <zebraTable
      :tableHeaders="resturantTableHeaders"
      :tableContent="resturantTableContent"
      :tableName="resturantTableName"
      :mainPath="mainPath"
      :fullPath="fullPath"
    />
    <zebraTable
      :tableHeaders="foodTableHeaders"
      :tableContent="foodTableContent"
      :tableName="foodTableName"
    />
  </div>
</template>

<script>
import zebraTable from "@/components/zebraTable.vue";

export default {
  components: {
    zebraTable
  },
  data() {
    return {
      resturantTableName: "Resturant List",
      foodTableName: "food List",
      resturantTableHeaders: ["Id","Name", "Location", "PhoneNumber", "ExpiryDate","link","Qr_Code"],
      foodTableHeaders: ["Id","Name", "Ingrediants", "Resturant", "Class"],
      mainPath :"/resturant/",
      fullPath:"https://menu-resturant.vercel.app/",
      resturantTableContent: [
        {
          Id:"0",
          Name: "subway",
          Location: "Mazza.St",
          phoneNumber: "0153545489",
          ExpiryDate: "15/3/2024",
          Link:''
        },
        {
          Id:"1",
          Name: "Grandstack",
          Location: "Baghdad.St",
          phoneNumber: "0157168617",
          ExpiryDate: "28/5/2024",
          Link:'/resturant/'
        },
      ],
      foodTableContent: [
        {
          "Id":"0","Name":"chickenPasta", "Ingrediants":"chicken, tomato souse, onion", "Resturant":"Grandstack" , "Class":"breakfast"
        },
        {
          "Id":"1","Name":"mottonPasta", "Ingrediants":"motton, sweet souse, onion", "Resturant":"subway" , "Class":"breakfast"
        },
      ],
    };
  },
};
</script>

<style>
.container{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>