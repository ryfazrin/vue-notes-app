<script setup>
import { getActiveNotes } from '../utils/local-data'
import { showFormattedDate } from '../utils'

const allNotes = getActiveNotes()
</script>

<template>
  <h2>Catatan Aktif</h2>
  <section class="notes-list">
    <article v-for="note in allNotes" class="note-item">
      <h3 class="note-item__title">
        <router-link :to="`notes/${note.id}`">{{ note.title }}</router-link>
      </h3>
      <p class="note-item__createdAt">{{ showFormattedDate(note.createdAt) }}</p>
      <p class="note-item__body">{{ note.body }}</p>
    </article>
  </section>
  <div class="homepage__action">
    <router-link to="notes/new">
      <button class="action" type="button" title="Tambah">
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em"
          xmlns="http://www.w3.org/2000/svg">
          <path fill="none" d="M0 0h24v24H0V0z"></path>
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
        </svg>
      </button>
    </router-link>
  </div>
</template>

<style scoped>

</style>