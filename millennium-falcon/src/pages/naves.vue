<template>
  <div>
    <footer id="navbar">
      <a href="/">Home</a>
      <a href="/pessoas">Pessoas</a>
      <a href="/filmes">Filmes</a>
    </footer>
    <b-table :items="naves" :fields="fields" responsive="sm" striped bordered>
    </b-table>
  </div>
</template>
<script>
import starships from "../services/starships"
export default {
  name: "naves",

  data() {
    return {
      naves: [],
      fields: [
        { key: "model", sortable: true },
        { key: "cost_in_credits", sortable: true },
        { key: "max_atmosphering_speed", sortable: false },
      ],
    }
  },
  mounted() {
    for (var i = 1; i < 4; i++) {
      starships.get("?page=" + i).then((response) => {
        this.naves.push(response.data.results)
        console.log(this.naves)
      })
    }
  },
}
</script>

<style>
table {
  margin: 150px auto;
}
@import "../assets/css/main.css";
</style>
