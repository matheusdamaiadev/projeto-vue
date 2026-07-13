import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {

  state: () => ({

    username: '',
    email: '',
    isAuthenticated: false

  }),

  actions: {

    register(user) {

      this.username = user.username
      this.email = user.email

    },

    login() {

      this.isAuthenticated = true

    },

    logout() {

      this.username = ''
      this.email = ''
      this.isAuthenticated = false

    }

  }

})