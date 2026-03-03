<script setup>
import axios from 'axios'
import { ref, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import LoadingSpinner from '@/components/LoadingSpinner.vue'

const route = useRoute()
const router = useRouter()

const pokemon = ref(null)
const loading = ref(true)

const back = () => {
  router.push('/pokemon')
}

const getData = async () => {
  try {
    loading.value = true
    pokemon.value = null

    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${route.params.name}`
    )

    // 🔥 Espera mínima de 200ms
    await new Promise(resolve => setTimeout(resolve, 200))

    pokemon.value = data

  } catch (error) {
    console.log(error)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  getData()
})

watch(
  () => route.params.name,
  () => {
    getData()
  }
)
</script>

<template>
  <LoadingSpinner v-if="loading" />

  <div v-else class="detail">
    <div class="card">

      <div class="image-section">
        <img 
          :src="pokemon.sprites.other['official-artwork'].front_default" 
          :alt="pokemon.name"
        />
      </div>

      <div class="info-section">
        <h1>{{ pokemon.name }}</h1>

        <div class="stats">
          <div>
            <span class="label">Altura</span>
            <span class="value">{{ pokemon.height }}</span>
          </div>
          <div>
            <span class="label">Peso</span>
            <span class="value">{{ pokemon.weight }}</span>
          </div>
        </div>

        <div class="moves">
          <h3>Ataques</h3>
          <div class="move-list">
            <span 
              v-for="(move, index) in pokemon.moves.slice(0, 10)" 
              :key="index"
              class="move-chip"
            >
              {{ move.move.name }}
            </span>
          </div>
        </div>

        <button @click="back">Volver</button>
      </div>

    </div>
  </div>
</template>

<style scoped>
.detail {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #74ebd5, #ACB6E5);
  padding: 20px;
}

.card {
  display: flex;
  background: white;
  border-radius: 25px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0,0,0,0.25);
  max-width: 900px;
  width: 100%;
}

.image-section {
  flex: 1;
  background: #f4f6ff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
}

.image-section img {
  width: 250px;
  transition: 0.3s;
}

.image-section img:hover {
  transform: scale(1.1);
}

.info-section {
  flex: 1;
  padding: 40px;
}

h1 {
  text-transform: capitalize;
  font-size: 32px;
  margin-bottom: 20px;
}

.stats {
  display: flex;
  gap: 30px;
  margin-bottom: 25px;
}

.label {
  display: block;
  font-size: 14px;
  color: #777;
}

.value {
  font-size: 18px;
  font-weight: bold;
}

.moves h3 {
  margin-bottom: 10px;
}

.move-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 25px;
}

.move-chip {
  background: #e0e7ff;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 13px;
  text-transform: capitalize;
  transition: 0.3s;
}

.move-chip:hover {
  background: #6366f1;
  color: white;
}

button {
  padding: 10px 30px;
  background: #111827;
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  background: #374151;
  transform: scale(1.05);
}
</style>