<script setup>
import Header from './components/Header.vue'
import useOnoff from './store/onoff';

const stateOnoff = useOnoff()

const onoff = stateOnoff.onoff

function incrementHandler () {
  stateOnoff.increment()
}

console.log(stateOnoff.onoff)
</script>

<template>
  <div class="app-container">
    <Header />
    <p>{{ onoff }}</p>
    <button @click="incrementHandler">Tambah</button>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped></style>