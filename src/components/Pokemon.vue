<script setup>
import axios from 'axios'
import { ref, onMounted, computed } from 'vue'
import { RouterLink } from 'vue-router'
import LoadingSpinner from '@/components/LoadingSpinner.vue'

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

    // 🔥 Espera mínima para que se vea el loading
    await new Promise(resolve => setTimeout(resolve, 1200))

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
  <!-- 🔥 Loading pantalla completa -->
  <LoadingSpinner v-if="loading" />

  <!-- 🔥 Contenido -->
  <div v-else class="home">
    <h1 class="title">Pokédex</h1>

    <div class="grid">
      <div 
        class="card" 
        v-for="pokemon in pokemons" 
        :key="pokemon.name"
      >
        <RouterLink :to="`/pokemon/${pokemon.name}`">
          <img 
            :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getId(pokemon.url)}.png`" 
            :alt="pokemon.name"
          />
          <h3 class="name">{{ pokemon.name }}</h3>
        </RouterLink>
      </div>
    </div>

    <div class="pagination">
      <button @click="prevPage" :disabled="offset === 0">
        Anterior
      </button>

      <span>
        Página {{ currentPage }} de {{ totalPages }}
      </span>

      <button @click="nextPage" :disabled="offset + limit >= total">
        Siguiente
      </button>
    </div>
  </div>
</template>

<style scoped>
.home {
  padding: 40px;
  background: linear-gradient(to right, #ffffffbf);
  min-height: 100vh;
  text-align: center;
}

.title {
  font-size: 40px;
  margin-bottom: 30px;
  color: #222;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  max-width: 1000px;
  margin: 0 auto;
}

.card {
  background: white;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  transition: 0.3s;
} 

.card:hover {
  transform: scale(1.05);
}

.card img {
  width: 100px;
}

.name {
  margin-top: 10px;
  text-transform: capitalize;
  color: #333;
}

a {
  text-decoration: none;
}

.pagination {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  gap: 20px;
}

button {
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
  background: #ffcb05;
  cursor: pointer;
  font-weight: bold;
  transition: 0.3s;
}

button:hover {
  background: #f5b700;
}

button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
</style>