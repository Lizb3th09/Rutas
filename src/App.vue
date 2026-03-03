<script setup>
import { RouterView } from 'vue-router'
import Foteer from './components/Foteer.vue'
import Header from './components/Header.vue'
</script>

<template>
  <div class="layout">
    <Header />

    <main class="content">
      <RouterView />
    </main>

    <Foteer />
  </div>
</template>

<style>
html, body, #app {
  height: 100%;
  margin: 0;
}

.layout {
     background-color: #fff9d6;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.content {
  flex: 1;
}
</style>