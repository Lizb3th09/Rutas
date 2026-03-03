<template>
  <div class="home">
    <div class="container">
      
      
     <h1>Pokédex</h1>    

<RouterLink to="/pokemon">
  
  <img 
    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" 
    alt="Pikachu"
    class="pikachu"
  />
</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.home {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}

h1 {
  font-size: 52px;
  font-weight: bold;
  color: #222;
  letter-spacing: 2px;
}

.pikachu {
  width: 300px;
  transition: 0.4s ease;
}

.pikachu:hover {
  transform: scale(1.1) rotate(-5deg);
}
</style>