<template>
  <div class="mt-16 flex justify-center items-center gap-5">

    <button
      @click="$emit('prev')"
      :disabled="disabledPrev"
      class="px-4 py-2 bg-[#611232] text-white rounded-md transition duration-300
             hover:bg-[#3A0B1D] hover:scale-105 active:scale-95
             disabled:opacity-50 disabled:cursor-not-allowed"
    >
      Anterior
    </button>

    <span class="font-medium">
      Página {{ page }} de {{ total }}
    </span>

    <button
      @click="$emit('next')"
      :disabled="disabledNext"
      class="px-4 py-2 bg-[#611232] text-white rounded-md transition duration-300
             hover:bg-[#3A0B1D] hover:scale-105 active:scale-95
             disabled:opacity-50 disabled:cursor-not-allowed"
    >
      Siguiente
    </button>

  </div>
</template>

<script setup>
defineProps({
  page: Number,
  total: Number,
  disabledPrev: Boolean,
  disabledNext: Boolean
})

defineEmits(['prev', 'next'])
</script>