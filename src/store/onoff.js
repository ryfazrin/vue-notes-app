import { computed, reactive, ref, toRefs } from "vue";

const state = reactive({
  onoff: 1
})

export default function useOnoff() {
  const onoff = computed(() => state.onoff)

  function increment() {
    state.onoff++
  }

  return {
    ...toRefs(onoff),
    onoff,
    increment
  }
}

// const state = ref({
//   onoff: 0,
// })

// export default function useOnoff() {
//   const onoff = computed(() => state.value.onoff)
//   function increment() {
//     state.value.onoff++
//     console.log(state.value.onoff)
//   }

//   return {
//     ...toRefs(onoff),
//     onoff,
//     increment
//   }
// }