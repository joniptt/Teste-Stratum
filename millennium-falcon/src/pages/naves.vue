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
      perPage: this.getLength,
      currentPage: 1,
      rows: 36,
      fields: [
        { key: "model", sortable: true },
        { key: "cost_in_credits", sortable: true },
        { key: "max_atmosphering_speed", sortable: false },
      ],
    }
  },
  created() {
    this.getDados()
  },
  methods: {
    getDados() {
      starships.get("?page=" + this.currentPage).then((response) => {
        this.naves = response.data.results
        console.log(this.naves)
      })
    },
    getLength() {
      return this.naves.length
    },
  },
  mounted() {},
}
</script>

<style>
@import "../assets/css/films.css";
</style>
