<script setup>
import { ref } from 'vue'
import { getAllNotes } from './utils/local-data'
import { showFormattedDate } from './utils'

const allNotes = ref(getAllNotes()) 
</script>

<template>
  <div class="app-container">
    <header>
      <h1><a href="/">Aplikasi Catatan</a></h1>
      <nav class="navigation">
        <ul>
          <li><a href="/archives">Arsip</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <section class="notes-list">
        <article v-for="note in allNotes" class="note-item">
          <h3 class="note-item__title">
            {{ note.title }}
          </h3>
          <p class="note-item__createdAt">{{ showFormattedDate(note.createdAt) }}</p>
          <p class="note-item__body">{{ note.body }}</p>
        </article>
      </section>
    </main>
  </div>
</template>

<style scoped></style>