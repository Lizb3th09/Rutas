<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="header">
    
    <div class="logo-container">
      <img 
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png" 
        alt="Pokeball"
        class="logo"
      />
      <h2>Pokédex</h2>
    </div>

    <!-- <nav class="nav">
      <RouterLink to="/" class="link">Home</RouterLink>
      <RouterLink to="/pokemon" class="link">Pokémon</RouterLink>
    </nav> -->

  </header>
</template>


<style scoped>
.header {
  background-color: #ffffff;
  color: rgb(0, 0, 0);
  width: 100%;


  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo {
  width: 40px;
}

h2 {
  margin: 0;
}

.nav {
  display: flex;
  gap: 25px;
}

.link {
  color: white; /* 🔥 cambio importante */
  text-decoration: none;
  font-weight: bold;
  transition: 0.3s;
}

.link:hover {
  color: #facc15; /* amarillo tipo Pikachu */
}
</style>