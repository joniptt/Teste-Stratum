<template>
  <div :style="image">
    <ul>
      <li>
        <a href="/pessoas">Pessoas</a>
      </li>
      <li>
        <a href="">Filmes</a>
      </li>
      <li>
        <a href="">Naves</a>
      </li>
    </ul>
    <div id="containner">
      <div id="card">
        <h1>Pessoas</h1>
        <p>{{ pessoas }}</p>
      </div>
      <div id="card">
        <h1>Filmes</h1>
        <p>{{ filmes }}</p>
      </div>
      <div id="card">
        <h1>Naves</h1>
        <p>{{ naves }}</p>
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
    image: { backgroundImage: "url(../assets/images/espaco.jpg)" },
  }),
  mounted() {
    api.get("people").then((response) => {
      this.pessoas = response.data.count
      console.log(response.data.count)
    })
    api.get("starships").then((response) => {
      this.naves = response.data.count
      console.log(response.data.count)
    })
    api.get("films").then((response) => {
      this.filmes = response.data.count
      console.log(response.data.count)
    })
  },
  methods: {},
}
</script>
<style>
@import "../assets/css/styles.css";
</style>
