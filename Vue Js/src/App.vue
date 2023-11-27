<script setup lang="ts">
    import { useAuthStore } from '@/stores/auth';
    import { useRouter } from 'vue-router';

    const auth = useAuthStore()
    const router = useRouter()

    const onLogout = () => {
      auth.logout()

      router.push('/login')
    }

    const peringatan = () => {
      alert("Kamu belum login, Login dulu!")

      router.push('/login')
    }
</script>

<template>
  <div class="container">
    <!-- Header -->
    <div class="menu">
      <!-- Menu -->
      <div class="menu-3">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link v-if="auth.username && auth.password" to="/restricted">Restricted Page</router-link>
        <a v-else @click="peringatan()">Restricted Page</a>
      </div>
    <!-- Authenticated User -->
    <div class="login">
      <p v-if="auth.username && auth.password">{{ auth.username }}</p>
      <div v-if="auth.username && auth.password">
        <button class="haha" @click="onLogout()">Logout</button>
      </div>
      <div v-else>
        <router-link to="/login">Login</router-link>
      </div>
    </div>
  </div>
  <!-- Body -->
  <router-view></router-view>
</div>
</template>

<style>
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menu-3 {
  display: flex;
  gap: 20px;
}

.menu-3 a,
.menu-3 button {
  text-decoration: none;
  background-color: #3498db;
  color: #fff;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

.menu-3 a:hover,
.menu-3 button:hover {
  background-color: #2980b9;
}

.login {
  display: flex;
  align-items: center;
}

.login p {
  margin-right: 10px;
  font-weight: bold;
}

.login button.haha {
  background-color: #e74c3c;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

.login button.haha:hover {
  background-color: #c0392b;
}

.login a {
  color: #333;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease-in-out;
}

.login a:hover {
  color: #3498db;
}
</style>
