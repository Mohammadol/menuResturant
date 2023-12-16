<template>
  <div class="container">
    <zebraTable
      :tableHeaders="tableHeaders"
      :tableContent="tableContent"
      :tableName="tableName"
    />
    <zebraTable
      :tableHeaders="tableHeaders"
      :tableContent="tableContent"
      :tableName="tableName"
    />
  </div>
</template>

<script>
import zebraTable from "@/components/zebraTable.vue";
export default {
  components: {
    zebraTable,
  },
  data() {
    return {
      tableName: "Restutant List",
      tableHeaders: ["Name", "Location", "PhoneNumber", "ExpiryDate"],
      tableContent: [
        {
          Name: "subway",
          Location: "Mazza.St",
          phoneNumber: "0153545489",
          ExpiryDate: "15/3/2024",
        },
        {
          Name: "Grandstack",
          Location: "Baghdad.St",
          phoneNumber: "0153545489",
          ExpiryDate: "28/5/2024",
        },
      ],
    };
  },
};
</script>

<style>
</style>