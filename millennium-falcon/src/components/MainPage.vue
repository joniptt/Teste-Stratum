<template>
  <div>
    <ul>
      <li>
        <a href="pessoas.vue">Pessoas</a>
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
export default {
  name: "MainPage",
}
</script>
<style>
@import "../assets/css/styles.css";
</style>
