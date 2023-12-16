<template>
  <h2>{{ tableName }}</h2>
  <div style="overflow-x: auto">
    <table>
      <tr>
        <th v-for="tHead in tableHeaders" :key="tHead">{{ tHead }}</th>
      </tr>
      <tr v-for="tContent in tableContent" :key="tContent">
        <td v-for="Content in tContent" :key="Content">{{ Content }}</td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  props: { tableHeaders: [], tableContent: {}, tableName: "" },
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