<script setup>
import { getArchivedNotes } from '../utils/network-data'
import { showFormattedDate } from '../utils'
import { ref, onMounted } from 'vue'

const archivedNotes = ref([])

onMounted(async () => {
  const res = await getArchivedNotes()
  archivedNotes.value = await res.data
})
</script>

<template>
  <h2>Catatan Arsip</h2>
  <section class="notes-list">
    <article v-for="note in archivedNotes" class="note-item">
      <h3 class="note-item__title">
        <router-link :to="`notes/${note.id}`">{{ note.title }}</router-link>
      </h3>
      <p class="note-item__createdAt">{{ showFormattedDate(note.createdAt) }}</p>
      <p class="note-item__body">{{ note.body }}</p>
    </article>
  </section>
</template>

<style scoped></style>
