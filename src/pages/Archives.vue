<script setup>
import { getArchivedNotes } from '../utils/local-data'
import { showFormattedDate } from '../utils'

const archivedNotes = getArchivedNotes()
</script>

<template>
  <h1>Archive Notes</h1>
  {{ archivedNotes }}
</template>

<style scoped></style>
