<template>
  <v-container fluid class="pa-0">
    <!-- Loading State -->
    <v-row v-if="loading" no-gutters class="loading-section">
      <v-col cols="12" class="text-center py-16">
        <v-progress-circular
          indeterminate
          color="primary"
          size="64"
        ></v-progress-circular>
        <p class="text-h6 mt-4">Carregando receita...</p>
      </v-col>
    </v-row>

    <!-- Recipe Not Found -->
    <v-row v-else-if="!receita" no-gutters class="error-section">
      <v-col cols="12" class="text-center py-16">
        <v-icon size="120" color="grey-lighten-1">mdi-food-off</v-icon>
        <h2 class="text-h4 font-weight-bold mt-4 mb-4">Receita não encontrada</h2>
        <p class="text-h6 text-grey-darken-1 mb-8">
          A receita que você está procurando não existe.
        </p>
        <v-btn
          color="primary"
          variant="flat"
          size="large"
          to="/catalogo_receitas"
        >
          <v-icon start>mdi-arrow-left</v-icon>
          Voltar ao Catálogo
        </v-btn>
      </v-col>
    </v-row>

    <!-- Recipe Content -->
    <div v-else>
      <!-- Hero Section -->
      <v-row no-gutters class="recipe-hero">
        <v-col cols="12">
          <v-container>
            <v-row align="center" class="py-16">
              <v-col cols="12" md="6" class="text-center text-md-left">
                <v-btn
                  color="white"
                  variant="outlined"
                  class="mb-6"
                  to="/catalogo_receitas"
                >
                  <v-icon start>mdi-arrow-left</v-icon>
                  Voltar ao Catálogo
                </v-btn>
                
                <h1 class="recipe-title text-h3 text-md-h2 font-weight-bold mb-4 text-white">
                  {{ receita.titulo }}
                </h1>
                
                <p class="recipe-description text-h6 text-white mb-6">
                  {{ receita.descricao }}
                </p>

                <div class="recipe-meta d-flex flex-wrap gap-4 justify-center justify-md-start">
                  <v-chip
                    :color="receita.dificuldade === 'Fácil' ? 'green' : receita.dificuldade === 'Médio' ? 'orange' : 'red'"
                    size="large"
                    class="px-4"
                  >
                    <v-icon start>mdi-flag</v-icon>
                    {{ receita.dificuldade }}
                  </v-chip>
                  
                  <v-chip color="white" size="large" class="px-4">
                    <v-icon start>mdi-clock-outline</v-icon>
                    {{ receita.tempo }}
                  </v-chip>
                  
                  <v-chip color="white" size="large" class="px-4">
                    <v-icon start>mdi-account-group</v-icon>
                    {{ receita.porcoes }}
                  </v-chip>
                </div>
              </v-col>
              
              <v-col cols="12" md="6" class="text-center">
                <v-img
                  :src="receita.imagem"
                  height="400"
                  cover
                  class="recipe-hero-image rounded-lg"
                ></v-img>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>

      <!-- Recipe Content -->
      <v-row no-gutters class="recipe-content py-16">
        <v-container>
          <v-row>
            <!-- Ingredients -->
            <v-col cols="12" md="4" class="mb-8">
              <v-card class="ingredients-card pa-6" elevation="2">
                <h3 class="text-h5 font-weight-bold mb-4 d-flex align-center">
                  <v-icon class="mr-2" color="primary">mdi-format-list-bulleted</v-icon>
                  Ingredientes
                </h3>
                <v-list>
                  <v-list-item
                    v-for="(ingrediente, index) in receita.ingredientes"
                    :key="index"
                    class="px-0"
                  >
                    <template v-slot:prepend>
                      <v-icon color="primary" size="small">mdi-check-circle</v-icon>
                    </template>
                    <v-list-item-title>{{ ingrediente }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-col>

            <!-- Instructions -->
            <v-col cols="12" md="8" class="mb-8">
              <v-card class="instructions-card pa-6" elevation="2">
                <h3 class="text-h5 font-weight-bold mb-6 d-flex align-center">
                  <v-icon class="mr-2" color="primary">mdi-book-open-variant</v-icon>
                  Modo de Preparo
                </h3>
                <div class="instructions-list">
                  <div
                    v-for="(instrucao, index) in receita.instrucoes"
                    :key="index"
                    class="instruction-step mb-6"
                  >
                    <div class="d-flex align-start">
                      <v-avatar
                        color="primary"
                        size="32"
                        class="mr-4 mt-1"
                      >
                        <span class="text-white font-weight-bold">{{ index + 1 }}</span>
                      </v-avatar>
                      <div class="instruction-text">
                        <p class="text-body-1">{{ instrucao }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </v-card>
            </v-col>
          </v-row>

          <!-- Tips Section -->
          <v-row v-if="receita.dicas" class="mt-8">
            <v-col cols="12">
              <v-card class="tips-card pa-6" elevation="2" color="orange-lighten-5">
                <h3 class="text-h5 font-weight-bold mb-4 d-flex align-center text-orange-darken-2">
                  <v-icon class="mr-2" color="orange">mdi-lightbulb</v-icon>
                  Dicas do Chef
                </h3>
                <p class="text-body-1 text-orange-darken-2">{{ receita.dicas }}</p>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-row>
  </div>
  </v-container>
</template>

<script>
 export default {
  name: 'Receita',
  data() {
    return {
      loading: true,
      receita: null
    }
  },
  created() {
    this.loadRecipe()
  },
  methods: {
    loadRecipe() {
      // Simular carregamento
      setTimeout(() => {
        const recipeId = parseInt(this.$route.params.id)
        this.receita = this.getRecipeById(recipeId)
        this.loading = false
      }, 1000)
    },
    getRecipeById(id) {
      // Carregar receitas cadastradas do localStorage
      const receitasCadastradas = JSON.parse(localStorage.getItem('receitasCadastradas') || '[]')
      
      // Receitas padrão
      const receitasPadrao = [
        {
          id: 1,
          titulo: 'Bolo de Chocolate',
          descricao: 'Um delicioso bolo de chocolate fofinho, perfeito para qualquer ocasião especial.',
          tempo: '45 min',
          porcoes: '8 pessoas',
          dificuldade: 'Fácil',
          imagem: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&h=600&fit=crop',
          ingredientes: [
            '2 xícaras de farinha de trigo',
            '1 xícara de açúcar',
            '1/2 xícara de cacau em pó',
            '1 colher de sopa de fermento em pó',
            '1/2 colher de chá de sal',
            '2 ovos',
            '1 xícara de leite',
            '1/2 xícara de óleo',
            '1 colher de chá de essência de baunilha'
          ],
          instrucoes: [
            'Pré-aqueça o forno a 180°C e unte uma forma redonda.',
            'Em uma tigela grande, misture a farinha, açúcar, cacau, fermento e sal.',
            'Em outra tigela, bata os ovos, leite, óleo e baunilha.',
            'Adicione os ingredientes líquidos aos secos e misture até ficar homogêneo.',
            'Despeje a massa na forma e asse por 30-35 minutos.',
            'Deixe esfriar antes de desenformar e servir.'
          ],
          dicas: 'Para um bolo ainda mais úmido, adicione 1/2 xícara de café forte à massa. O café realça o sabor do chocolate!'
        },
        {
          id: 2,
          titulo: 'Risotto de Cogumelos',
          descricao: 'Cremoso risotto italiano com cogumelos frescos e queijo parmesão.',
          tempo: '30 min',
          porcoes: '4 pessoas',
          dificuldade: 'Médio',
          imagem: 'https://images.unsplash.com/photo-1476124369491-e7addf5db469?w=800&h=600&fit=crop',
          ingredientes: [
            '1 1/2 xícaras de arroz arbóreo',
            '300g de cogumelos variados',
            '1 cebola média picada',
            '2 dentes de alho picados',
            '1/2 xícara de vinho branco seco',
            '1 litro de caldo de legumes quente',
            '1/2 xícara de queijo parmesão ralado',
            '2 colheres de sopa de manteiga',
            'Sal e pimenta a gosto',
            'Salsinha picada para decorar'
          ],
          instrucoes: [
            'Aqueça o caldo de legumes e mantenha quente em fogo baixo.',
            'Em uma panela grande, derreta a manteiga e refogue a cebola até ficar transparente.',
            'Adicione o alho e os cogumelos, cozinhe até dourarem.',
            'Adicione o arroz e mexa por 2 minutos até ficar translúcido.',
            'Adicione o vinho e mexa até evaporar completamente.',
            'Adicione o caldo quente, uma concha por vez, mexendo constantemente.',
            'Continue cozinhando por 18-20 minutos até o arroz ficar cremoso.',
            'Retire do fogo, adicione o parmesão e tempere com sal e pimenta.',
            'Sirva imediatamente decorado com salsinha.'
          ],
          dicas: 'Mexa constantemente o risotto para ativar o amido do arroz e criar a textura cremosa característica.'
        },
        {
          id: 3,
          titulo: 'Salada Caesar',
          descricao: 'Salada clássica com alface, croutons, queijo parmesão e molho caesar.',
          tempo: '15 min',
          porcoes: '2 pessoas',
          dificuldade: 'Fácil',
          imagem: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=800&h=600&fit=crop',
          ingredientes: [
            '1 cabeça de alface romana',
            '1/2 xícara de croutons',
            '1/4 xícara de queijo parmesão ralado',
            '2 colheres de sopa de azeite extra virgem',
            '1 colher de sopa de suco de limão',
            '1 colher de chá de mostarda Dijon',
            '1 dente de alho picado',
            'Sal e pimenta a gosto',
            'Anchovas (opcional)'
          ],
          instrucoes: [
            'Lave e seque bem as folhas de alface, rasgue em pedaços médios.',
            'Em uma tigela pequena, misture o azeite, limão, mostarda e alho.',
            'Tempere o molho com sal e pimenta a gosto.',
            'Em uma tigela grande, coloque a alface e regue com o molho.',
            'Misture delicadamente para cobrir todas as folhas.',
            'Adicione os croutons e o queijo parmesão.',
            'Misture novamente e sirva imediatamente.'
          ],
          dicas: 'Para um sabor mais autêntico, prepare o molho com antecedência e deixe descansar por 30 minutos.'
        },
        {
          id: 4,
          titulo: 'Salmão Grelhado',
          descricao: 'Salmão grelhado com ervas e limão, acompanhado de legumes assados.',
          tempo: '25 min',
          porcoes: '2 pessoas',
          dificuldade: 'Médio',
          imagem: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&h=600&fit=crop',
          ingredientes: [
            '2 filés de salmão (200g cada)',
            '2 colheres de sopa de azeite',
            '1 limão (suco e raspas)',
            '2 colheres de sopa de ervas frescas (salsinha, endro)',
            'Sal e pimenta a gosto',
            'Legumes para acompanhar (brócolis, cenoura, batata)',
            '2 colheres de sopa de manteiga'
          ],
          instrucoes: [
            'Tempere os filés de salmão com sal, pimenta e suco de limão.',
            'Deixe marinar por 15 minutos em temperatura ambiente.',
            'Aqueça uma frigideira ou grelha em fogo médio-alto.',
            'Adicione o azeite e grelhe o salmão por 4-5 minutos de cada lado.',
            'Prepare os legumes cortados em pedaços pequenos.',
            'Refogue os legumes na manteiga até ficarem macios.',
            'Finalize o salmão com as ervas frescas e raspas de limão.',
            'Sirva o salmão acompanhado dos legumes.'
          ],
          dicas: 'Para um salmão perfeito, não vire mais de uma vez e deixe descansar por 2 minutos antes de servir.'
        },
        {
          id: 5,
          titulo: 'Tiramisu',
          descricao: 'Sobremesa italiana clássica com café, mascarpone e cacau em pó.',
          tempo: '2 horas',
          porcoes: '6 pessoas',
          dificuldade: 'Difícil',
          imagem: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&h=600&fit=crop',
          ingredientes: [
            '500g de queijo mascarpone',
            '6 ovos (gemas e claras separadas)',
            '1/2 xícara de açúcar',
            '2 xícaras de café forte',
            '2 colheres de sopa de licor de café (opcional)',
            '1 pacote de biscoitos savoiardi',
            'Cacau em pó para polvilhar',
            'Chocolate amargo ralado para decorar'
          ],
          instrucoes: [
            'Prepare o café forte e deixe esfriar. Adicione o licor se desejar.',
            'Bata as gemas com metade do açúcar até ficar claro e cremoso.',
            'Misture o mascarpone às gemas batidas.',
            'Bata as claras em neve com o açúcar restante.',
            'Dobre delicadamente as claras ao creme de mascarpone.',
            'Molhe rapidamente os biscoitos no café.',
            'Monte em camadas: biscoitos, creme, biscoitos, creme.',
            'Leve à geladeira por pelo menos 4 horas.',
            'Antes de servir, polvilhe com cacau e chocolate ralado.'
          ],
          dicas: 'Para um tiramisu perfeito, deixe descansar na geladeira por uma noite inteira antes de servir.'
        },
        {
          id: 6,
          titulo: 'Pasta Carbonara',
          descricao: 'Massa italiana cremosa com bacon, ovos e queijo parmesão.',
          tempo: '20 min',
          porcoes: '4 pessoas',
          dificuldade: 'Médio',
          imagem: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=800&h=600&fit=crop',
          ingredientes: [
            '400g de espaguete',
            '200g de bacon em cubos',
            '4 ovos grandes',
            '1 xícara de queijo parmesão ralado',
            '2 dentes de alho picados',
            'Sal e pimenta preta a gosto',
            'Azeite extra virgem',
            'Salsinha picada para decorar'
          ],
          instrucoes: [
            'Cozinhe o espaguete em água salgada até ficar al dente.',
            'Reserve 1 xícara da água do cozimento.',
            'Em uma frigideira, frite o bacon até ficar crocante.',
            'Adicione o alho e frite por 1 minuto.',
            'Bata os ovos com o parmesão em uma tigela.',
            'Escorra a massa e misture com o bacon.',
            'Retire do fogo e misture rapidamente com os ovos.',
            'Adicione água do cozimento se necessário para cremosidade.',
            'Tempere com sal e pimenta e sirva com salsinha.'
          ],
          dicas: 'O segredo é misturar os ovos fora do fogo para não cozinhar e criar grumos.'
        },
        {
          id: 7,
          titulo: 'Hambúrguer Artesanal',
          descricao: 'Hambúrguer caseiro com carne moída, queijo cheddar e vegetais frescos.',
          tempo: '30 min',
          porcoes: '4 pessoas',
          dificuldade: 'Fácil',
          imagem: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=600&fit=crop',
          ingredientes: [
            '500g de carne moída (patinho)',
            '4 pães de hambúrguer',
            '4 fatias de queijo cheddar',
            '1 cebola roxa fatiada',
            '2 tomates fatiados',
            'Alface americana',
            '4 fatias de bacon',
            'Maionese e ketchup',
            'Sal e pimenta a gosto'
          ],
          instrucoes: [
            'Tempere a carne moída com sal e pimenta.',
            'Divida em 4 bolas e forme os hambúrgueres.',
            'Grelhe os hambúrgueres por 4-5 minutos de cada lado.',
            'Frite o bacon até ficar crocante.',
            'Toaste os pães levemente.',
            'Monte os hambúrgueres: pão, maionese, alface, hambúrguer, queijo, bacon, tomate, cebola, ketchup, pão.',
            'Sirva imediatamente com batatas fritas.'
          ],
          dicas: 'Para hambúrgueres mais suculentos, faça um pequeno buraco no centro de cada um antes de grelhar.'
        },
        {
          id: 8,
          titulo: 'Sopa de Abóbora',
          descricao: 'Sopa cremosa de abóbora com gengibre e noz-moscada.',
          tempo: '40 min',
          porcoes: '6 pessoas',
          dificuldade: 'Fácil',
          imagem: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&h=600&fit=crop',
          ingredientes: [
            '1 abóbora média cortada em cubos',
            '1 cebola picada',
            '2 dentes de alho picados',
            '1 pedaço de gengibre ralado',
            '1 litro de caldo de legumes',
            '200ml de leite de coco',
            '2 colheres de sopa de azeite',
            'Noz-moscada a gosto',
            'Sal e pimenta a gosto',
            'Salsinha para decorar'
          ],
          instrucoes: [
            'Em uma panela grande, aqueça o azeite e refogue a cebola.',
            'Adicione o alho e gengibre, refogue por 2 minutos.',
            'Adicione a abóbora e refogue por 5 minutos.',
            'Adicione o caldo de legumes e deixe ferver.',
            'Cozinhe por 20 minutos até a abóbora ficar macia.',
            'Bata tudo no liquidificador até ficar cremoso.',
            'Volte à panela e adicione o leite de coco.',
            'Tempere com noz-moscada, sal e pimenta.',
            'Sirva quente decorado com salsinha.'
          ],
          dicas: 'Para uma sopa ainda mais cremosa, passe por uma peneira fina após bater no liquidificador.'
        }
      ]
      
      // Combinar receitas padrão com as cadastradas
      const todasReceitas = [...receitasPadrao, ...receitasCadastradas]
      
      return todasReceitas.find(recipe => recipe.id === id)
    }
  }
 }
</script>

<style scoped>
.loading-section,
.error-section {
  background-color: #f8f9fa;
  min-height: 50vh;
}

.recipe-hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
}

.recipe-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
  opacity: 0.1;
}

.recipe-hero-image {
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.recipe-title {
  line-height: 1.2;
}

.recipe-description {
  line-height: 1.6;
}

.recipe-meta {
  gap: 1rem;
}

.recipe-content {
  background-color: #f8f9fa;
}

.ingredients-card,
.instructions-card,
.tips-card {
  border-radius: 16px !important;
  height: fit-content;
}

.instruction-step {
  border-left: 3px solid #e0e0e0;
  padding-left: 16px;
  margin-left: 16px;
}

.instruction-step:last-child {
  border-left: none;
}

.instruction-text {
  flex: 1;
}

.tips-card {
  border-left: 4px solid #ff9800;
}

@media (max-width: 960px) {
  .recipe-title {
    font-size: 2rem !important;
  }
  
  .recipe-description {
    font-size: 1.125rem !important;
  }
  
  .recipe-meta {
    justify-content: center !important;
  }
}

@media (max-width: 600px) {
  .recipe-title {
    font-size: 1.75rem !important;
  }
  
  .recipe-description {
    font-size: 1rem !important;
  }
}
</style>
