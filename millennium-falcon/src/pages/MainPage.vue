<template>
  <div id="main">
    <footer id="navbar">
      <a href="/pessoas">Pessoas</a>
      <a href="/filmes">Filmes</a>
      <a href="/naves">Naves</a>
    </footer>
    <div id="containner">
      <div id="card">
        <h1>Pessoas</h1>
        <div id="circle">
          <p>{{ pessoas }}</p>
        </div>
      </div>
      <div id="card">
        <h1>Filmes</h1>
        <div id="circle">
          <p>{{ filmes }}</p>
        </div>
      </div>
      <div id="card">
        <h1>Naves</h1>
        <div id="circle">
          <p>{{ naves }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../services/api"
export default {
  name: "MainPage",

  data: () => ({
    pessoas: 0,
    naves: 0,
    filmes: 0,
  }),
  mounted() {
    api
      .get("people")
      .then((response) => {
        this.pessoas = response.data.count
        console.log(response.data.count)
      })
      .catch((error) => {
        console.log(error)
      })
    api
      .get("films")
      .then((response) => {
        this.filmes = response.data.count
        console.log(response.data.count)
      })
      .catch((error) => {
        console.log(error)
      })
    api
      .get("starships")
      .then((response) => {
        this.naves = response.data.count
        console.log(response.data.count)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  methods: {},
}
</script>
<style>
@import "../assets/css/main.css";
</style>
