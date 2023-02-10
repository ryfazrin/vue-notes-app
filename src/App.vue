<script setup>
import Header from './components/Header.vue'
import useTheme from './store/theme'

const storeTheme = useTheme()
const themeDark = storeTheme.dark
</script>

<template>
  <div class="app-container" :data-theme="themeDark? 'dark' : 'light'">
    <Header />
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped></style>