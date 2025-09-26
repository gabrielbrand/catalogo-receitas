<template>
  <header>
    <h1>
      <img src="../../../public/logo.png" alt="Logo" width="100" height="100"/>
      <router-link :to="{ name: 'home' }">Home</router-link>
    </h1>
    <h3>
      <router-link :to="{ name: 'catalogo_receitas' }">Catálogo de Receitas</router-link>
    </h3>
    <h3>
      <router-link :to="{ name: 'sobre' }">Sobre</router-link>
    </h3>
    <h3>
      <router-link :to="{ name: 'login' }">Login</router-link>
    </h3>
  </header>

</template>

<script>
export default {
  name: 'header'
}
</script>

<style scoped>
header {
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
    background: #e0e7ff;
}
header h1 {
  color: #4f46e5;
}

header h3 {
  color: #4f46e5;
}
</style>