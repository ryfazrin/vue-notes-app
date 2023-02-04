<script setup>
import { ref } from 'vue'
import { getAllNotes } from '../utils/local-data'
import { showFormattedDate } from '../utils'

const allNotes = ref(getAllNotes()) 
</script>

<template>
  <main>
    <section class="notes-list">
      <article v-for="note in allNotes" class="note-item">
        <h3 class="note-item__title">
          <router-link :to="`notes/${note.id}`">{{ note.title }}</router-link>
        </h3>
        <p class="note-item__createdAt">{{ showFormattedDate(note.createdAt) }}</p>
        <p class="note-item__body">{{ note.body }}</p>
      </article>
    </section>
  </main>
</template>

<style scoped></style>