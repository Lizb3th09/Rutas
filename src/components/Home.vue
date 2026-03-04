<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="h-screen flex justify-center items-center">
    
    <div class="flex flex-col items-center gap-8">
      
      <h1 class="text-5xl font-bold">
        Pokédex
      </h1>    

      <RouterLink to="/pokemon">
        <img 
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" 
          alt="Pikachu"
          class="w-72 transition duration-300 hover:scale-110 hover:-rotate-6"
        />
      </RouterLink>

    </div>

  </div>
</template>