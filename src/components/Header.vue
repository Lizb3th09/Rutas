<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="w-full bg-white text-black flex justify-between items-center px-6 py-4 shadow-md">
    
    <!-- Logo -->
    <div class="flex items-center gap-3">
      <img 
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png" 
        alt="Pokeball"
        class="w-10"
      />
      <h2 class="text-xl font-bold">
        Pokédex
      </h2>
    </div>

  </header>
</template>