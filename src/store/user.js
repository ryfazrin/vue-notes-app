import { defineStore } from 'pinia'
import { getUserLogged, putAccessToken } from '../utils/network-data'
import router from '../router'

const useUserStore = defineStore({
  id: 'userState',
  state: () => ({
    userLogged: localStorage.getItem('userLogged'),
  }),
  getters: {
    getUser: (state) => state.userLogged
  },
  actions: {
    async updatedUserLogged() {
      const { data } = await getUserLogged()

      // store userLogged in local storage to keep user logged in between page refreshes
      localStorage.setItem('userLogged', data.name)

      this.userLogged = data.name
    },
    logout() {
      putAccessToken('')

      localStorage.removeItem('userLogged')
      this.userLogged = ''

      alert('Logout')
      router.push('/login')
    }
  }
})

export { useUserStore }