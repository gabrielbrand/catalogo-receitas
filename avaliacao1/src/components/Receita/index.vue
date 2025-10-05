<template>
  <v-container fluid class="pa-0">
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

    <div v-else>
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
                    class="px-4 bg-white font-weight-bold"
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

      <v-row no-gutters class="recipe-content py-16">
        <v-container>
          <v-row>
            <v-col cols="12" md="4" class="mb-8">
              <v-card class="ingredients-card pa-6" elevation="2">
                <h3 class="text-h5 font-weight-bold mb-4 d-flex align-center">
                  <v-icon class="mr-2" color="#0b174c">mdi-format-list-bulleted</v-icon>
                  Ingredientes
                </h3>
                <v-list>
                  <v-list-item
                    v-for="(ingrediente, index) in receita.ingredientes"
                    :key="index"
                    class="px-0"
                  >
                    <template v-slot:prepend>
                      <v-icon color="#0b174c" size="small">mdi-check-circle</v-icon>
                    </template>
                    <v-list-item-title>{{ ingrediente }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-col>

            <v-col cols="12" md="8" class="mb-8">
              <v-card class="instructions-card pa-6" elevation="2">
                <h3 class="text-h5 font-weight-bold mb-6 d-flex align-center">
                  <v-icon class="mr-2" color="#0b174c">mdi-book-open-variant</v-icon>
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
                        color="#0b174c"
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

          <v-row v-if="receita.dicas" class="mt-8">
            <v-col cols="12">
              <v-card class="tips-card pa-6" elevation="2" color="white">
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
      setTimeout(() => {
        const recipeId = parseInt(this.$route.params.id)
        this.receita = this.getRecipeById(recipeId)
        this.loading = false
      })
    },
    getRecipeById(id) {
      const receitasCadastradas = JSON.parse(localStorage.getItem('receitasCadastradas') || '[]')
      
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
          titulo: 'Pizza de Strogonoff',
          descricao: 'Pizza deliciosa com strogonoff de carne, cogumelos e molho cremoso.',
          tempo: '50 min',
          porcoes: '6 pessoas',
          dificuldade: 'Médio',
          imagem: 'https://www.paollarestaurante.com.br/uploads/images/2019/08/pizza-strogonoff-de-carne-1565146013.jpg',
          ingredientes: [
            '1 massa de pizza (pronta ou caseira)',
            '500g de carne bovina em tiras',
            '200g de cogumelos frescos',
            '1 cebola média picada',
            '2 dentes de alho picados',
            '1 lata de creme de leite',
            '2 colheres de sopa de ketchup',
            '1 colher de sopa de mostarda',
            '200g de queijo mussarela ralado',
            'Sal e pimenta a gosto',
            'Azeite para refogar',
            'Orégano para polvilhar'
          ],
          instrucoes: [
            'Pré-aqueça o forno a 200°C.',
            'Em uma frigideira, refogue a carne com azeite até dourar.',
            'Adicione a cebola e o alho, refogue até ficarem transparentes.',
            'Adicione os cogumelos e cozinhe por 5 minutos.',
            'Misture o ketchup, mostarda e tempere com sal e pimenta.',
            'Adicione o creme de leite e cozinhe por mais 5 minutos.',
            'Abra a massa de pizza em uma forma untada.',
            'Espalhe o strogonoff sobre a massa.',
            'Cubra com queijo mussarela e orégano.',
            'Asse por 15-20 minutos até a borda dourar.',
            'Retire do forno e sirva quente.'
          ],
          dicas: 'Para uma pizza ainda mais saborosa, deixe o strogonoff descansar por 30 minutos antes de montar a pizza.'
        }
      ]
      
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
  background: linear-gradient(135deg, #ef4545 0%, #e47b1a 100%);
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
