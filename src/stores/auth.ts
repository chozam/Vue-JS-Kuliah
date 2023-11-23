import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
    const username = ref('')
    const password = ref('')

    const login = (name:string, pass:string)=> {
        username.value = name
        password.value = pass
    }

    const logout = () => {
        username.value = ''
        password.value = ''
    }

    return { username, login, logout, password }
})