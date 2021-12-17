<template>
  <div>
    <div id="containner-home">
      <div id="home-card">
        <ul class="home">
          <li>Nome:</li>
          <li>Idade:</li>
          <li>Planeta natal:</li>
        </ul>
      </div>
      <div id="home-card">
        <ul class="home">
          <li>Nome:</li>
          <li>Idade:</li>
          <li>Planeta natal:</li>
        </ul>
      </div>
      <div id="home-card">
        <ul class="home">
          <li>Nome:</li>
          <li>Idade:</li>
          <li>Planeta natal:</li>
        </ul>
      </div>
      <div id="home-card">
        <ul class="home">
          <li>Nome:</li>
          <li>Idade:</li>
          <li>Planeta natal:</li>
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
    return {}
  },
  created() {
    api.get("")
  },
}
</script>

<style>
@import "../assets/css/people.css";
</style>
