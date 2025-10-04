// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    user: {
      name: '',
      email: '',
    },
    isLogged: false,
  }),
  getters: {
    getUser: (state) => state.user,
  },
  actions: {
    login(email, password) {
      if (email === 'gabrielbrandgo@gmail.com' && password === '123456') {
        this.user.name = 'Gabriel Brand';
        this.user.email = 'gabrielbrandgo@gmail.com';
        this.isLogged = true;
      }
    },
    logout() {
      this.user.name = '';
      this.user.email = '';
      this.isLogged = false;
    }
  }
})
