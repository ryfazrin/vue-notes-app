<script setup>
import { ref } from 'vue'
import { useUserStore } from '../store/user';

const storeUser = useUserStore()

const errorLogin = ref(true)
</script>

<template>
  <header>
    <h1 @click="storeUser.increment"><router-link to="/">Aplikasi Catatan {{ storeUser.doubleCount }}</router-link></h1>
    <nav v-if="storeUser.userLogged" class="navigation">
      <ul>
        <li><router-link to="/archive">Arsip</router-link></li>
      </ul>
    </nav>
    <button v-if="storeUser.userLogged" @click="storeUser.logout" class="button-logout" type="button">
      <svg stroke="currentColor" fill="currentColor" stroke-width="0"
        viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path
          d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5a2 2 0 00-2 2v4h2V5h14v14H5v-4H3v4a2 2 0 002 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z">
        </path>
      </svg>
      {{ storeUser.userLogged }}
    </button>
  </header>
</template>

<style scoped>

</style>