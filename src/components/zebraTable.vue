<template>
  <div style="overflow-x: auto;padding: 10px">
  <h2>{{ tableName }}</h2>
    <table>
      <tr>
        <th v-for="tHead in tableHeaders" :key="tHead">{{ tHead }}</th>
      </tr>
      <tr v-for="tContent in tableContent" :key="tContent">
        <td v-for="Content in tContent" :key="Content.Id" >{{ Content !== tContent.Link ? Content:"" }} <router-link :to="mainPath+tContent.Id" v-if="Content === tContent.Link">{{mainPath+tContent.Id}}</router-link></td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  props: { tableHeaders: [], tableContent: {}, tableName: "", mainPath:"" },
};
</script>
<style>
table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid #ddd;
}

th,
td {
  text-align: left;
  padding: 16px;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}
</style>