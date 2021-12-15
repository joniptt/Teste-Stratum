<template>
  <div>
    <footer id="navbar">
      <a href="/">Home</a>
      <a href="/pessoas">Pessoas</a>
      <a href="/filmes">Filmes</a>
    </footer>
    <b-table
      class="table"
      :items="naves"
      :fields="fields"
      :per-page="perPage"
      :current-page="currentPage"
      :total-rows="rows"
      responsive="sm"
      striped
      bordered
    >
    </b-table>
    <b-pagination
      v-model="currentPage"
      :per-page="perPage"
      aria-controls="my-table"
      align="center"
    ></b-pagination>
  </div>
</template>
<script>
import starships from "../services/starships"
export default {
  name: "naves",

  data() {
    return {
      naves: [],
      perPage: 1,
      currentPage: 1,
      rows: 1,
      fields: [
        { key: "model", sortable: true },
        { key: "cost_in_credits", sortable: true },
        { key: "max_atmosphering_speed", sortable: false },
      ],
    }
  },
  methods: {
    getDados() {
      starships.get("?page=" + this.currentPage).then((response) => {
        this.naves = response.data.results
        console.log(this.naves)
      })
    },
  },
  computed: {},
  mounted() {
    starships.get("/").then((response) => {
      this.naves = response.data.results
      console.log(this.naves)
    })
  },
}
</script>

<style>
.table thead {
  background-color: chartreuse;
}
.table {
  margin: 150px auto;
}
@import "../assets/css/main.css";
</style>
