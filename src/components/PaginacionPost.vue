<script setup>
const props = defineProps({
  page: {
    type: Number,
    required: true
  },
  total: {
    type: Number,
    required: true
  },
  disabledPrev: Boolean,
  disabledNext: Boolean
})

const emit = defineEmits(['prev', 'next'])
</script>

<template>
  <div class="flex justify-center items-center gap-5">
    
    <button
      @click="emit('prev')"
      :disabled="disabledPrev"
      class="px-4 py-2 bg-red-400 text-white rounded-md hover:bg-red-900
             disabled:opacity-50 disabled:cursor-not-allowed"
    >
      Anterior
    </button>

    <span class="font-medium">
      Página {{ page }} de {{ total }}
    </span>

    <button
      @click="emit('next')"
      :disabled="disabledNext"
      class="px-4 py-2 bg-red-400 text-white rounded-md hover:bg-red-900
             disabled:opacity-50 disabled:cursor-not-allowed"
    >
      Siguiente
    </button>

  </div>
</template>