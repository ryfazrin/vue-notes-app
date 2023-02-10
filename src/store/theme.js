import { computed, reactive, toRefs } from 'vue'

const state = reactive({
  dark:  localStorage.getItem('darkTheme') || true
})

console.log('state.dark', state.dark)

function useTheme() {
  const dark = computed(() => state.dark)

  function updatedTheme() {
    state.dark = !state.dark
    localStorage.setItem('darkTheme', state.dark)
    console.log(state.dark)
  }

  return {
    ...toRefs(dark),
    dark,
    updatedTheme
  }
}

export default useTheme