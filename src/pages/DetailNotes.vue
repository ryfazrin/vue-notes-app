<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import router from '../router'
import { showFormattedDate } from '../utils'
import { deleteNote, getNote, archiveNote, unarchiveNote } from '../utils/network-data'

const route = useRoute()

const note = ref({})

onMounted(async () => {
  const res = await getNote(route.params.id)
  note.value = res.data
})

async function deleteNoteshandler (id) {
  await deleteNote(id)
  router.push('/')
}

async function archiveNotesHandler (id) {
  await archiveNote(id)
  router.push('/archive')
}

async function unarchiveNotesHandler (id) {
  await unarchiveNote(id)
  router.push('/')
}
</script>

<template>
  <section class="detail-page">
    <h3 class="detail-page__title">{{ note.title }}</h3>
    <p class="detail-page__createdAt">{{ showFormattedDate(note.createdAt) }}</p>
    <div class="detail-page__body">{{ note.body }}</div>
    <div class="detail-page__action">
      <button v-if="!note.archived" @click="archiveNotesHandler(note.id)" class="action" type="button" title="Arsipkan">
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em"
          xmlns="http://www.w3.org/2000/svg">
          <path fill="none" d="M0 0h24v24H0V0z"></path>
          <path
            d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM6.24 5h11.52l.81.97H5.44l.8-.97zM5 19V8h14v11H5zm8.45-9h-2.9v3H8l4 4 4-4h-2.55z">
          </path>
        </svg>
      </button>
      <button v-if="note.archived" @click="unarchiveNotesHandler(note.id)" class="action" type="button" title="Aktifkan">
        <svg stroke="currentColor" fill="currentColor"
          stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <path fill="none" d="M0 0h24v24H0V0z"></path>
          <path
            d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM6.24 5h11.52l.83 1H5.42l.82-1zM5 19V8h14v11H5zm3-5h2.55v3h2.9v-3H16l-4-4z">
          </path>
        </svg>
      </button>
      <button @click="deleteNoteshandler(note.id)" class="action" type="button" title="Hapus">
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em"
          xmlns="http://www.w3.org/2000/svg">
          <path fill="none" d="M0 0h24v24H0V0z"></path>
          <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"></path>
        </svg>
      </button>
    </div>
  </section>
</template>