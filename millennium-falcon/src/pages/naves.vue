<template>
  <div>
    <footer id="navbar">
      <a href="/">Home</a>
      <a href="/pessoas">Pessoas</a>
      <a href="/filmes">Filmes</a>
    </footer>
    <b-table
      id="my-table"
      :items="naves"
      :fields="fields"
      :per-page="0"
      :current-page="currentPage"
      responsive="sm"
      bordered
      :busy.sync="isBusy"
      ref="table"
    >
    </b-table>
    <b-pagination
      class="pag"
      :total-rows="rows"
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
      isBusy: false,
      naves: [],
      perPage: 10,
      currentPage: 1,
      rows: 0,
      fields: [
        { key: "model", sortable: true },
        { key: "cost_in_credits", sortable: true },
        { key: "max_atmosphering_speed", sortable: true },
      ],
    }
  },
  created() {
    this.getDados()
  },
  watch: {
    currentPage() {
      this.getDados()
    },
  },
  methods: {
    getDados() {
      this.isBusy = true
      starships
        .get("/?page=" + this.currentPage)
        .then((response) => {
          this.rows = response.data.count
          this.naves = response.data.results
          this.isBusy = false
        })
        .catch((response) => {
          console.log(response)
          this.isBusy = false
        })
    },
  },
}
</script>

<style>
.pag :prev-text {
  background-color: chartreuse;
}
.pag button {
  background-color: chartreuse;
}
.pag button:hover {
  background-color: rgb(113, 216, 10);
}
@import "../assets/css/films.css";
</style>
