<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router'
    import { ref } from 'vue';

    const auth = useAuthStore()
    const username = ref('')
    const password = ref('')
    const router = useRouter()

    const onLogin = () => {
        if(username.value == ''|| password.value == ''){
            alert("Tolong lengkapi Username dan Password Anda")
        }else{
            auth.login(username.value, password.value)
            router.push('/')
        }
    }
    
</script>

<template>
    <h1>Login Page</h1>
    <div>
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
