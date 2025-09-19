<template>
  <header>
    <h1>Meu Cabeçalho</h1>
    <h3>Sobre</h3>
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
    justify-content: space-between;
    background: #e0e7ff;
}
header h1 {
  color: #4f46e5;
}

header h3 {
  text-align: center;
  color: #4f46e5;
}
</style>