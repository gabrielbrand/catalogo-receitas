<template>
  <div class="sobre">
    <img class="imagem" src="../../../public/foto-about.jpg" alt="Logo"/>
    <div class="texto">
      <h1>Conheça mais sobre a gente</h1>
      <p>
        O <strong>GoRecipe</strong> nasceu da paixão por compartilhar sabores e transformar momentos simples em experiências inesquecíveis. Nosso objetivo é oferecer um espaço onde qualquer pessoa, seja iniciante ou experiente na cozinha, encontre receitas práticas, criativas e cheias de sabor.
        <br><br>
        Acreditamos que cozinhar é muito mais do que preparar alimentos: é cuidar, celebrar e reunir pessoas. Por isso, trabalhamos para trazer receitas testadas, dicas úteis e inspirações que tornam o ato de cozinhar mais fácil e prazeroso.
        <br><br>
        Mais do que um site de receitas, somos uma comunidade que valoriza o amor pela comida e a alegria de compartilhar cada prato.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sobre'
}
</script>

<style scoped>
.sobre {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 40px;
  width: 90%;
  max-width: 1200px;
  margin: 20px auto 40px auto;
  padding: 20px;
}

.imagem {
  flex: 1;
  max-width: 500px;
  border-radius: 12px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);
}

.texto {
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: justify;
  color: #0B174C;
  padding: 30px;
  border-radius: 12px;
}

.texto h1 {
  text-align: center;
  margin-bottom: 20px;
  color: #0B174C;
}

.texto p {
  font-size: 18px;
  line-height: 1.6;
}
</style>
