<script setup>
import { ref, reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { addNote } from '../utils/local-data';

const router = useRouter()

//state posts
const title = ref('')
const body = ref('')

function addNotesHandler () {
  addNote({ title, body })
  router.back() // alternative: router.push('/')
}
</script>

<template>
  <div class="add-new-page__input">
    <form @submit.prevent="addNotesHandler">
      <input class="add-new-page__input__title" type="text" v-model="title" placeholder="Masukkan Judul Post">
      <input class="add-new-page__input__body" type="text" v-model="body" placeholder="Masukkan body">
      <div class="add-new-page__action">
        <button class="action" type="submit" title="Simpan">
          <svg stroke="currentColor"
            fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em"
            xmlns="http://www.w3.org/2000/svg">
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
          </svg>
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>

</style>