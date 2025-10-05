<template>
  <v-container fluid class="pa-0">
    <!-- Header Section -->
    <v-row no-gutters class="catalog-header">
      <v-col cols="12">
        <v-container>
          <v-row align="center" justify="center" class="py-16">
            <v-col cols="12" md="8" class="text-center">
              <h1 class="text-h3 text-md-h2 font-weight-bold mb-4 text-white">
                Catálogo de Receitas
              </h1>
              <p class="text-h6 text-white mb-6">
                Descubra receitas deliciosas para todos os momentos
              </p>
              <v-btn
                color="white"
                variant="flat"
                size="large"
                @click="handleCreateRecipe"
                class="create-recipe-btn"
              >
                <v-icon start>mdi-plus</v-icon>
                {{ appStore.isLogged ? 'Criar Nova Receita' : 'Criar Nova Receita' }}
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>

    <!-- Recipes Grid -->
    <v-row no-gutters class="recipes-section py-16">
      <v-container>
        <v-row>
          <v-col 
            cols="12" 
            sm="6" 
            md="4" 
            lg="3" 
            v-for="receita in receitas" 
            :key="receita.id"
            class="mb-6"
          >
            <v-card 
              class="recipe-card h-100"
              elevation="2"
              hover
            >
              <v-img
                :src="receita.imagem"
                height="200"
                cover
                class="recipe-image"
              >
                <div class="recipe-overlay">
                  <v-chip 
                    :color="receita.dificuldade === 'Fácil' ? 'green' : receita.dificuldade === 'Médio' ? 'orange' : 'red'"
                    size="small"
                    class="ma-2"
                  >
                    {{ receita.dificuldade }}
                  </v-chip>
                </div>
              </v-img>

              <v-card-title class="recipe-title">
                {{ receita.titulo }}
              </v-card-title>

              <v-card-subtitle class="recipe-subtitle">
                <v-icon size="small" class="mr-1">mdi-clock-outline</v-icon>
                {{ receita.tempo }}
                <v-icon size="small" class="ml-4 mr-1">mdi-account</v-icon>
                {{ receita.porcoes }}
              </v-card-subtitle>

              <v-card-text class="recipe-description">
                {{ receita.descricao }}
              </v-card-text>

              <v-card-actions class="pa-4">
                <v-spacer></v-spacer>
                <v-btn
                  color="primary"
                  variant="flat"
                  :to="{ name: 'receita', params: { id: receita.id } }"
                  class="recipe-btn"
                >
                  <v-icon start>mdi-eye</v-icon>
                  Ver Receita
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-row>
  </v-container>
</template>

<script>
import { useAppStore } from '@/stores/app'

export default {
  name: 'CatalogoReceitas',
  data() {
    return {
      receitas: []
    }
  },
  setup() {
    const appStore = useAppStore()
    return { appStore }
  },
  created() {
    this.loadRecipes()
  },
  methods: {
    handleCreateRecipe() {
      if (this.appStore.isLogged) {
        // Se estiver logado, redirecionar para cadastro
        this.$router.push('/cadastrar-receita')
      } else {
        // Se não estiver logado, redirecionar para login
        this.$router.push('/login')
      }
    },
    loadRecipes() {
      // Receitas padrão
      const receitasPadrao = [
        {
          id: 1,
          titulo: 'Bolo de Chocolate',
          descricao: 'Um delicioso bolo de chocolate fofinho, perfeito para qualquer ocasião especial.',
          tempo: '45 min',
          porcoes: '8 pessoas',
          dificuldade: 'Fácil',
          imagem: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop'
        },
        {
          id: 2,
          titulo: 'Risotto de Cogumelos',
          descricao: 'Cremoso risotto italiano com cogumelos frescos e queijo parmesão.',
          tempo: '30 min',
          porcoes: '4 pessoas',
          dificuldade: 'Médio',
          imagem: 'https://images.unsplash.com/photo-1476124369491-e7addf5db469?w=400&h=300&fit=crop'
        },
        {
          id: 3,
          titulo: 'Salada Caesar',
          descricao: 'Salada clássica com alface, croutons, queijo parmesão e molho caesar.',
          tempo: '15 min',
          porcoes: '2 pessoas',
          dificuldade: 'Fácil',
          imagem: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop'
        },
        {
          id: 4,
          titulo: 'Salmão Grelhado',
          descricao: 'Salmão grelhado com ervas e limão, acompanhado de legumes assados.',
          tempo: '25 min',
          porcoes: '2 pessoas',
          dificuldade: 'Médio',
          imagem: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop'
        },
        {
          id: 5,
          titulo: 'Tiramisu',
          descricao: 'Sobremesa italiana clássica com café, mascarpone e cacau em pó.',
          tempo: '2 horas',
          porcoes: '6 pessoas',
          dificuldade: 'Difícil',
          imagem: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop'
        },
        {
          id: 6,
          titulo: 'Pasta Carbonara',
          descricao: 'Massa italiana cremosa com bacon, ovos e queijo parmesão.',
          tempo: '20 min',
          porcoes: '4 pessoas',
          dificuldade: 'Médio',
          imagem: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=300&fit=crop'
        },
        {
          id: 7,
          titulo: 'Hambúrguer Artesanal',
          descricao: 'Hambúrguer caseiro com carne moída, queijo cheddar e vegetais frescos.',
          tempo: '30 min',
          porcoes: '4 pessoas',
          dificuldade: 'Fácil',
          imagem: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop'
        },
        {
          id: 8,
          titulo: 'Sopa de Abóbora',
          descricao: 'Sopa cremosa de abóbora com gengibre e noz-moscada.',
          tempo: '40 min',
          porcoes: '6 pessoas',
          dificuldade: 'Fácil',
          imagem: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop'
        }
      ]

      // Carregar receitas cadastradas do localStorage
      const receitasCadastradas = JSON.parse(localStorage.getItem('receitasCadastradas') || '[]')
      
      // Combinar receitas padrão com as cadastradas
      this.receitas = [...receitasPadrao, ...receitasCadastradas]
    }
  }
}
</script>

<style scoped>
.catalog-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
}

.catalog-header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
  opacity: 0.1;
}

.recipes-section {
  background-color: #f8f9fa;
}

.recipe-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 16px !important;
  overflow: hidden;
}

.recipe-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

.recipe-image {
  position: relative;
}

.recipe-overlay {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
}

.recipe-title {
  font-size: 1.1rem !important;
  font-weight: 600 !important;
  line-height: 1.3;
  padding-bottom: 8px !important;
}

.recipe-subtitle {
  color: #666 !important;
  font-size: 0.9rem !important;
  padding-top: 0 !important;
  padding-bottom: 12px !important;
}

.recipe-description {
  color: #555 !important;
  font-size: 0.9rem;
  line-height: 1.4;
  padding-top: 0 !important;
  padding-bottom: 16px !important;
}

.recipe-btn {
  border-radius: 8px !important;
  text-transform: none !important;
  font-weight: 500 !important;
}

.create-recipe-btn {
  border-radius: 8px !important;
  text-transform: none !important;
  font-weight: 500 !important;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
}

.create-recipe-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2) !important;
}

@media (max-width: 600px) {
  .recipe-card {
    margin-bottom: 16px;
  }
}
</style>
