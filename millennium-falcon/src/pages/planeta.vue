<template>
  <div>
    <div id="containner-home">
      <div id="home-card">
        <h1>Tatooine</h1>
        <ul class="home">
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div id="home-card">
        <ul class="home">
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div id="home-card">
        <ul class="home">
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div id="home-card">
        <ul class="home">
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../services/api"
export default {
  name: "planeta",
  data() {
    return {
      planetas: [],
    }
  },
  created() {
    api
      .get("homeworld")
      .then((response) => {
        this.planetas = response.data.results
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
