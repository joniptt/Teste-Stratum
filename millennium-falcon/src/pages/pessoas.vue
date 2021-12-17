<template>
  <div>
    <footer id="navbar">
      <a href="/">Home</a>
      <a href="/filmes">Filmes</a>
      <a href="/naves">Naves</a>
    </footer>

    <div id="containner">
      <div id="card">
        <img src="../assets/images/luke.jpg" alt="luke" />
        <ul class="jedi">
          <li>Nome:{{ luke.name }}</li>
          <li>Idade:{{ luke.birth_year }}</li>
          <li>Planeta natal: Tatooine</li>
        </ul>
      </div>
      <div id="card">
        <img src="../assets/images/darthvader.jpg" alt="darth" />
        <ul class="jedi">
          <li>Nome:{{ darth.name }}</li>
          <li>Idade:{{ darth.birth_year }}</li>
          <li>Planeta natal: Tatooine</li>
        </ul>
      </div>
      <div id="card">
        <img src="../assets/images/leia.jpg" alt="leia" />
        <ul class="jedi">
          <li>Nome:{{ leia.name }}</li>
          <li>Idade:{{ leia.birth_year }}</li>
          <li>Planeta natal: Alderaan</li>
        </ul>
      </div>
      <div id="card">
        <img src="../assets/images/obi.jpg" alt="obi" />
        <ul class="jedi">
          <li>Nome:{{ obi.name }}</li>
          <li>Idade:{{ obi.birth_year }}</li>
          <li>Planeta natal: Stewjon</li>
        </ul>
      </div>
    </div>
    <planeta v-if="seen == false" />
    <button v-if="seen" @click="hide">More Info</button>
    <button v-if="seen == false" @click="show">Less Info</button>
  </div>
</template>

<script>
import api from "../services/api"
import planeta from "./planeta.vue"
export default {
  name: "Pessoas",
  components: {
    planeta,
  },
  data() {
    return {
      seen: true,
      luke: [],
      darth: [],
      leia: [],
      obi: [],
      planeta: [],
    }
  },
  methods: {
    show() {
      return (this.seen = true)
    },
    hide() {
      return (this.seen = false)
    },
  },
  computed: {},
  created() {
    api
      .get("people")
      .then((response) => {
        this.luke = response.data.results[0]
        this.darth = response.data.results[3]
        this.leia = response.data.results[4]
        this.obi = response.data.results[9]
      })
      .catch((error) => {
        console.log(error)
      })
  },
}
</script>

<style>
@import "../assets/css/people.css";
</style>
