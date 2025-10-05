<template>
  <header>
    <h1>
      <router-link id="home" :to="{ name: 'home' }">
        <img class="logo" src="../../../public/1.png" alt="Logo" width="100" height="100"/>
        <img class="gorecipe" src="../../../public/2.png" alt="Logo" width="200" height="200"/>
      </router-link>
    </h1>
    <h3>
      <router-link id="catalogo_receitas" :to="{ name: 'catalogo_receitas' }">Catálogo de Receitas</router-link>
    </h3>
    <h3>
      <router-link id="sobre" :to="{ name: 'sobre' }">Sobre</router-link>
    </h3>
    <h3>
      <span v-if="appStore.isLogged">{{ appStore.getUser.name }} 
        <v-btn @click="appStore.logout()">Sair</v-btn>
      </span>
      
      <router-link v-else id="login" :to="{ name: 'login' }">Login</router-link>
    </h3>
  </header>

</template>

<script>
export default {
  name: 'header'
}
</script>

<script setup>
import { useAppStore } from '@/stores/app.js';

const appStore = useAppStore();
</script>


<style scoped>
header {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 70px;
    align-items: center;
    justify-content: space-evenly;
    background-color: #f8f9fa;
    box-shadow: 1px 3px 0 rgb(0 0 0 / 0.1)
}

header #home, #login, #catalogo_receitas, #sobre {
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  color: #0B174C;
}

header #home {
  display: flex;
  flex-direction: row;
  align-items: center;
}

header #home .gorecipe {
  margin-left: -20px;
  margin-top: 10px;
}


</style>
