import { computed, reactive, toRefs } from 'vue'

const state = reactive({
  dark: true
})

function useTheme() {
  const dark = computed(() => state.dark)

  function updatedTheme() {
    state.dark = !state.dark
    console.log(state.dark)
  }

  return {
    ...toRefs(dark),
    dark,
    updatedTheme
  }
}

export default useTheme