<template>
  <div>
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
        <p></p>
      </div>
      <div id="card">
        <h1>Filmes</h1>
      </div>
      <div id="card">
        <h1>Naves</h1>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: "MainPage",
  data: () => ({
    count: 0,
  }),

  methods: {
    async getCount() {
      const data = axios.get("https://swapi.dev/api/people.count")
      try {
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>
<style>
@import "../assets/css/styles.css";
</style>
