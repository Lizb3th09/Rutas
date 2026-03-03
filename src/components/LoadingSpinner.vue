<template>
  <div class="loading-wrapper">
    <div class="loading-content">
      <img 
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
        alt="Pokeball"
        class="pokeball"
      />
      <p>Loading...</p>
    </div>
  </div>
</template>

<style scoped>
.loading-wrapper {
  position: fixed;       /* 🔥 Cubre toda la pantalla */
  inset: 0;              /* top:0 right:0 bottom:0 left:0 */
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;     /* puedes quitarlo si no quieres fondo */
  z-index: 999;
}

.loading-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.pokeball {
  width: 100px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

p {
  font-weight: 600;
  font-size: 18px;
}
</style>