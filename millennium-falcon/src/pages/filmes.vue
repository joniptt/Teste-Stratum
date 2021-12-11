<template>
  <div>
    <footer id="navbar">
      <a href="/">Home</a>
      <a href="/pessoas">Pessoas</a>
      <a href="">Naves</a>
    </footer>
    <table>
      <tr>
        <th v-on:click="sortTitle('title')">Tilte</th>
        <th v-on:click="sortId('episode_id')">Episode_id</th>
        <th>Created</th>
      </tr>
      <tr id="card" v-for="filme in filmes" v-bind:key="filme.id">
        <td>{{ filme.title }}</td>
        <td>{{ filme.episode_id }}</td>
        <td>{{ filme.created }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import api from "../services/api"
export default {
  name: "Filmes",
  data() {
    return {
      filmes: [],
      sortBy: "asc",
    }
  },
  methods: {
    sortTitle: function (dado) {
      if (this.sortBy == "asc") {
        this.filmes.sort(function (a, b) {
          return a[dado].localeCompare(b[dado])
        })
        this.sortBy = "desc"
      } else {
        this.filmes.sort(function (a, b) {
          return b[dado].localeCompare(a[dado])
        })
        this.sortBy = "asc"
      }
    },
    sortId: function (dado) {
      this.filmes.sort(dado)
    },
  },
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
