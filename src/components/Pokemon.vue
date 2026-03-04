<script setup>
import axios from 'axios'
import { ref, onMounted, computed } from 'vue'
import { RouterLink } from 'vue-router'
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import Boton from '@/components/Boton.vue'

const pokemons = ref([])
const loading = ref(true)

const limit = 10
const total = 150
const offset = ref(0)

const currentPage = computed(() => (offset.value / limit) + 1)
const totalPages = total / limit

const getData = async () => {
  loading.value = true

  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset.value}`
    )

    await new Promise(resolve => setTimeout(resolve, 200))

    pokemons.value = response.data.results
  } catch (error) {
    console.log(error)
  } finally {
    loading.value = false
  }
}

const nextPage = () => {
  if (offset.value + limit >= total) return
  offset.value += limit
  getData()
}

const prevPage = () => {
  if (offset.value === 0) return
  offset.value -= limit
  getData()
}

const getId = (url) => {
  const segments = url.split('/')
  return segments[segments.length - 2]
}

onMounted(() => {
  getData()
})
</script>

<template>
  <LoadingSpinner v-if="loading" />

  <div v-else class="min-h-screen p-10 bg-white/80 text-center">
    
    <h1 class="text-4xl mb-8 text-gray-800 font-bold">
      Pokédex
    </h1>

    <!-- Grid -->
    <div class="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-5 max-w-5xl mx-auto">
      
      <div
        v-for="pokemon in pokemons"
        :key="pokemon.name"
        class="bg-white rounded-xl p-5 shadow-md transition duration-300 hover:scale-105"
      >
        <RouterLink :to="`/pokemon/${pokemon.name}`" class="no-underline">
          
          <img
            :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getId(pokemon.url)}.png`"
            :alt="pokemon.name"
            class="w-24 mx-auto"
          />

          <h3 class="mt-3 capitalize text-gray-700">
            {{ pokemon.name }}
          </h3>

        </RouterLink>
      </div>

    </div>

    <!-- Paginación -->
   <Boton
  :page="currentPage"
  :total="totalPages"
  :disabledPrev="offset === 0"
  :disabledNext="offset + limit >= total"
  @prev="prevPage"
  @next="nextPage"
/>

  </div>
</template>