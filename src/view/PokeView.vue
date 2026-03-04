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

  <div
    v-else
    class="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-300 to-indigo-300 p-5"
  >
    <div class="flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden shadow-2xl max-w-4xl w-full">

      <!-- Imagen -->
      <div class="flex-1 bg-indigo-50 flex items-center justify-center p-10">
        <img
          :src="pokemon.sprites.other['official-artwork'].front_default"
          :alt="pokemon.name"
          class="w-64 transition duration-300 hover:scale-110"
        />
      </div>

      <!-- Información -->
      <div class="flex-1 p-10">

        <h1 class="text-3xl capitalize mb-5">
          {{ pokemon.name }}
        </h1>

        <!-- Stats -->
        <div class="flex gap-8 mb-6">
          <div>
            <span class="block text-sm text-gray-500">Altura</span>
            <span class="text-lg font-bold">{{ pokemon.height }}</span>
          </div>

          <div>
            <span class="block text-sm text-gray-500">Peso</span>
            <span class="text-lg font-bold">{{ pokemon.weight }}</span>
          </div>
        </div>

        <!-- Moves -->
        <div class="mb-6">
          <h3 class="mb-2 font-semibold">Ataques</h3>

          <div class="flex flex-wrap gap-2">
            <span
              v-for="(move, index) in pokemon.moves.slice(0, 10)"
              :key="index"
              class="bg-indigo-100 px-3 py-1 rounded-full text-sm capitalize transition duration-300 hover:bg-indigo-500 hover:text-white"
            >
              {{ move.move.name }}
            </span>
          </div>
        </div>

        <!-- Botón -->
        <button
          @click="back"
          class="px-8 py-2 bg-gray-900 text-white rounded-full transition duration-300 hover:bg-gray-700 hover:scale-105"
        >
          Volver
        </button>

      </div>
    </div>
  </div>
</template>