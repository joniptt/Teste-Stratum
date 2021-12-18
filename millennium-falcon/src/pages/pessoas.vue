<template>
  <div>
    <footer id="navbar">
      <a href="/">Home</a>
      <a href="/filmes">Filmes</a>
      <a href="/naves">Naves</a>
    </footer>

    <div id="containner">
      <div id="card" v-for="(jedis, index) in jedi" :key="index">
        <ul class="jedi">
          <img
            src="../assets/images/luke.jpg"
            alt=""
            v-if="jedis.name === 'luke'"
            class="jimg"
          />
          <img
            src="../assets/images/darthvader.jpg"
            alt=""
            v-if="jedis.name === 'darth'"
            class="jimg"
          />
          <img
            src="../assets/images/leia.jpg"
            alt=""
            v-if="jedis.name === 'leia'"
            class="jimg"
          />
          <img
            src="../assets/images/obi.jpg"
            alt=""
            v-if="jedis.name === 'obi'"
            class="jimg"
          />
          <li>Nome:{{ jedis.name }}</li>
          <li>Idade:{{ jedis.birth_year }}</li>
          <li>Planeta natal: Tatooine</li>
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
      jedi: [
        { name: "luke", birth_year: "1600BY" },
        { name: "darth", birth_year: "1600BY" },
        { name: "leia", birth_year: "1600BY" },
        { name: "obi", birth_year: "1600BY" },
      ],
      planeta: [],
    }
  },
  methods: {
    getImg(dado) {
      console.log(dado)
      switch (dado) {
        case "luke":
          return "src/assets/iamges/luke.jpg"

        case "darth":
          return "src/assets/iamges/darthvader.jpg"
        case "leia":
          return "src/assets/iamges/leia.jpg"
        case "obi":
          return "src/assests/images/obi.jpg"
      }
    },
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
