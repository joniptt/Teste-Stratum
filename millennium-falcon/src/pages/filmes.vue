<template>
  <div>
    <footer id="navbar">
      <a href="/">Home</a>
      <a href="/pessoas">Pessoas</a>
      <a href="">Naves</a>
    </footer>
    <table>
      <tr>
        <th>Tilte</th>
        <th>Episode_id</th>
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
