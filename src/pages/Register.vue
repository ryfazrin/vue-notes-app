<script setup>
import { ref } from 'vue'
import router from '../router'
import { register } from '../utils/network-data'

const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')

async function registerHandler () {
  // console.log(password.value, confirmPassword.value)
  if (password.value != confirmPassword.value) {
    alert('Password tidak sama')
    return
  }

  await register({
    name: name.value,
    email: email.value,
    password: password.value
  })

  alert('SUCCESS')
  router.push('/login')
}
</script>

<template>
  <section class="register-page">
    <h2>Isi form untuk mendaftar akun.</h2>
    <form @submit.prevent="registerHandler" class="input-register">
      <label for="name">Name</label>
      <input v-model="name" type="text" id="name">
      <label for="email">Email</label>
      <input v-model="email" type="email" id="email">
      <label for="password">Password</label>
      <input v-model="password" type="password" id="password">
      <label for="confirmPassword">Confirm Password</label>
      <input v-model="confirmPassword" type="password" id="confirmPassword">
      <button type="submit">Register</button>
    </form>
  </section>
  <p>Sudah punya akun? <router-link to="/login">Login di sini</router-link></p>
</template>

<style scoped>

</style>