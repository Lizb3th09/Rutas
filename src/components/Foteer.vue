<script setup>
</script>

<template>
  <footer class="footer">
    <p>
      © 2026 Pokédex App | Datos obtenidos de 
      <a href="https://pokeapi.co/" target="_blank">
        PokeAPI
      </a>
    </p>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #111;
  color: white;
  width: 100%;
 
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.links {
  display: flex;
  gap: 20px;
}

.footer-link {
  color: #facc15; /* amarillo tipo Pikachu */
  text-decoration: none;
  font-weight: bold;
  transition: 0.3s;
}

.footer-link:hover {
  color: white;
}
</style>