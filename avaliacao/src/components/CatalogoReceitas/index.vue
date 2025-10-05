<template>
  <div>
    <h1>Catálogo de Receitas</h1>
    <p>Página do catálogo de receitas.</p>
  </div>
  <div id="receitas" v-for="receita in receitas" :key="receita.id">
    <router-link :to="{ name: 'receita', params: { id: receita.id } }">
      {{ receita.titulo }}
    </router-link>
  </div>
</template>

<script>
 export default {
  name: 'CatalogoReceitas',
  data() {
    return {
      receitas: [
        { id: 1, titulo: 'Receita 1' },
        { id: 2, titulo: 'Receita 2' },
        { id: 3, titulo: 'Receita 3' }
      ]
    }
  }
}
</script>

<style scoped>
  #receitas {
    text-align: center;
  }

 h1 {
    text-align: center;
    }

  p {
    text-align: center;
  }
</style>