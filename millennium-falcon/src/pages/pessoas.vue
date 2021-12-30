<template>
  <div>
    <footer id="navbar">
      <a href="/">Home</a>
      <a href="/filmes">Filmes</a>
      <a href="/naves">Naves</a>
    </footer>

    <div id="containner">
      <div id="card" v-for="(jedis, index) in jedi" :key="index">
        <img
          src="../assets/images/luke.jpg"
          alt=""
          v-if="jedis.name === 'Luke Skywalker'"
          class="jimg"
        />
        <img
          src="../assets/images/darthvader.jpg"
          alt=""
          v-if="jedis.name === 'Darth Vader'"
          class="jimg"
        />
        <img
          src="../assets/images/leia.jpg"
          alt=""
          v-if="jedis.name === 'Leia Organa'"
          class="jimg"
        />
        <img
          src="../assets/images/obi.jpg"
          alt=""
          v-if="jedis.name === 'Obi-Wan Kenobi'"
          class="jimg"
        />
        <ul class="jedi">
          <li>Nome:{{ jedis.name }}</li>
          <li>Idade:{{ jedis.birth_year }}</li>
          <li>Planeta natal: {{ getPlanet(jedis.homeworld) }}</li>
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

      jedi: [],
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
    async getPlanet(dados) {
      try {
        const mundo = await api.get(dados)
        console.log(mundo.data.name)
        return mundo.data.name
      } catch (e) {
        console.log(e)
      }
    },
  },
  computed: {},

  created() {
    api
      .get("people")
      .then((response) => {
        for (var i = 0; i < 10; i++) {
          if (i == 0 || i == 3 || i == 4 || i == 9) {
            this.jedi.push(response.data.results[i])
          }
        }
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
