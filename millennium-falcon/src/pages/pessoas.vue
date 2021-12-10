<template>
  <div>
    <footer id="navbar">
      <a href="/">Home</a>
      <a href="">Filmes</a>
      <a href="">Naves</a>
    </footer>

    <div id="containner">
      <div id="card">
        <img src="../assets/images/luke.jpg" alt="luke" />
        <ul class="jedi">
          <li>Nome:{{ luke.name }}</li>
          <li>Idade:{{ luke.birth_year }}</li>
          <li>Planeta natal:</li>
        </ul>
      </div>
      <div id="card">
        <img src="../assets/images/darthvader.jpg" alt="darth" />
        <ul class="jedi">
          <li>
            {{ darth.name }}
          </li>
          <li>{{ darth.birth_year }}</li>
          <li>Planeta natal:</li>
        </ul>
      </div>
      <div id="card">
        <img src="../assets/images/leia.jpg" alt="leia" />
        <ul class="jedi">
          <li>
            {{ leia.name }}
          </li>
          <li>{{ leia.birth_year }}</li>
          <li>Planeta natal:</li>
        </ul>
      </div>
      <div id="card">
        <img src="../assets/images/obi.jpg" alt="obi" />
        <ul class="jedi">
          <li>
            {{ obi.name }}
          </li>
          <li>{{ obi.birth_year }}</li>
          <li>Planeta natal:</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../services/api"
export default {
  name: "Pessoas",
  data: () => ({
    luke: [],
    darth: [],
    leia: [],
    obi: [],
    planeta: [],
  }),
  methods: {},
  computed: {},
  mounted() {
    api.get("people").then((response) => {
      this.luke = response.data.results[0]
      this.darth = response.data.results[3]
      this.leia = response.data.results[4]
      this.obi = response.data.results[9]
      this.console.log(response.data.results)
      console.log(this.leia)
    })
  },
}
</script>

<style>
@import "../assets/css/people.css";
</style>
