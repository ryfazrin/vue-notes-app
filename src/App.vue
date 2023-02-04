<script setup>
import Header from './components/Header.vue'
</script>

<template>
  <div class="app-container">
    <Header />
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped></style>