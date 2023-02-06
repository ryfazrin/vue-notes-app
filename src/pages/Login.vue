<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { login, putAccessToken } from '../utils/network-data';

const router = useRouter()

const email = ref('')
const password = ref('')

async function loginHandler () {
  const { error, data } = await login({
    email: email.value,
    password: password.value
  })

  if (error) {
    alert(error)
    return
  }

  putAccessToken(data.accessToken)
  router.push('/')
}
</script>

<template>
  <section class="login-page">
    <h2>Isi form untuk Login.</h2>
    <form @submit.prevent="loginHandler" class="input-login">
      <label for="email">Email</label>
      <input v-model="email" type="email" id="email">
      <label for="password">Password</label>
      <input v-model="password" type="password" id="password">
      <button type="submit">Login</button>
    </form>
  </section>
  <p>Sudah punya akun? <router-link to="/register">Daftar di sini</router-link></p>
</template>

<style scoped>

</style>