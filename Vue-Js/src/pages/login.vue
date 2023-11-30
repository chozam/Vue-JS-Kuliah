<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router'
import axios from "axios";
import { ref } from 'vue';

    const auth = useAuthStore()
    var username = ref('') //cara supaya ini tidak terbaca kosong lagi ketika sudah login                                       Harusnya constant
    var password = ref('') // cara simpan state-nya meskipun direfresh tapi auth-nya masih nyimpan data username sama password
    const router = useRouter()
    var isLoggedin = false
    const loginStatus = sessionStorage.getItem('isLoggedin')
    isLoggedin = JSON.parse(loginStatus)
  
  const onLogin = async () => {
        if (username.value == ''|| password.value == ''){
            alert("Tolong lengkapi Username dan Password Anda")
        } 
        else {
          const response = await axios.post('http://localhost:3000/login',{
          username: username.value,
          password: password.value,
        })
        if(response.data.status == 'success') {
            auth.login(username.value, password.value)
            router.push('/')
            isLoggedin = true
            sessionStorage.setItem("isLoggedin", JSON.stringify(isLoggedin))
            sessionStorage.setItem("username", JSON.stringify(username.value))
            sessionStorage.setItem("password", JSON.stringify(password.value))
        }
        else{
          alert(response.data.message)
          isLoggedin = false
        }
      }
    }
</script>

<template>
    <h1>Login Page</h1>
    <h3 v-if="isLoggedin">You are Already Logged in</h3>
    <div v-else>
        <input type="text" v-model="username" placeholder="Username" required>
        <input type="password" v-model="password" placeholder="Password" required>
        <button class="btn-log" @click="onLogin()">Login</button>
    </div>
</template>

<style>
input {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
}

.btn-log{
  width: 50%;
  padding: 10px;
  background-color: #2ecc71;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease-in-out;
}

.btn-log:hover {
  background-color: #27ae60;
}
</style>
