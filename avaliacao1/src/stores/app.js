// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    user: {
      name: '',
      email: '',
    },
    isLogged: false,
    isLoading: false,
    registeredUsers: [],
  }),
  getters: {
    getUser: (state) => state.user,
    getIsLoading: (state) => state.isLoading,
    getRegisteredUsers: (state) => state.registeredUsers,
  },
  actions: {
    async registerUser(credentials) {
      this.isLoading = true;
      
      try {
        
        const newUser = {
          name: credentials.name,
          email: credentials.email,
          password: credentials.password,
        };
        
        this.registeredUsers.push(newUser);
        
        return { success: true, user: newUser };
      } catch (error) {
        return { success: false, error: error.message };
      } finally {
        this.isLoading = false;
      }
    },
    
    login(email, password) {
      try {
      const registeredUser = this.registeredUsers.find(
        user => user.email === email && user.password === password
      );
      
      if (registeredUser) {
        this.user.name = registeredUser.name;
        this.user.email = registeredUser.email;
        this.isLogged = true;
        return { success: true };
      }
      
        return { success: false, error: 'Email ou senha incorretos' };
      } catch (error) {
        return { success: false, error: error.message };
      }
    },
    
    logout() {
      this.user.name = '';
      this.user.email = '';
      this.isLogged = false;
    },
    
    clearError() {
    },
    
    findUserByEmail(email) {
      return this.registeredUsers.find(user => user.email === email);
    },
    
    emailExists(email) {
      return this.registeredUsers.some(user => user.email === email);
    },
  }
});
