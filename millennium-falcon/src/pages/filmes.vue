<template>
  <div>
    <footer id="navbar">
      <a href="/">Home</a>
      <a href="/pessoas">Pessoas</a>
      <a href="/naves">Naves</a>
    </footer>
    <b-table
      class="table"
      :items="filmes"
      :fields="fields"
      responsive="sm"
      bordered
    ></b-table>
  </div>
</template>

<script>
import api from "../services/api"
export default {
  name: "Filmes",

  data() {
    return {
      fields: [
        { key: "title", sortable: true },
        { key: "episode_id", sortable: true },
        { key: "created", sortable: false },
      ],

      filmes: [],
    }
  },
  methods: {},
  mounted() {
    api
      .get("films")
      .then((response) => {
        this.filmes = response.data.results
        console.log(this.filmes)
      })
      .catch((error) => {
        console.log(error)
      })
  },
}
</script>

<style>
@import "../assets/css/films.css";
</style>
