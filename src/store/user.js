import { computed, reactive, toRefs } from 'vue'
import { getUserLogged } from '../utils/network-data'

const state = reactive({
  userLogged: ''
})

function useUserLogged() {
  async function fetchUser () {
    const { error, data } = await getUserLogged()
    return { error, data }
  }

  const userLogged = computed(async () => {
    return state.userLogged = data.name
  })

  async function updatedUserLogged() {
    const { data } = await fetchUser()

    state.userLogged = data.name
  }

  return {
    ...toRefs(userLogged),
    userLogged,
    updatedUserLogged
  }
}

export default useUserLogged