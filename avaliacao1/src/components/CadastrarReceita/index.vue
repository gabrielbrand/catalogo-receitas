<template>
  <v-container fluid class="pa-0">
    <v-row no-gutters class="create-header">
      <v-col cols="12">
        <v-container>
          <v-row align="center" justify="center" class="py-16">
            <v-col cols="12" md="8" class="text-center">
              <h1 class="text-h3 text-md-h2 font-weight-bold mb-4 text-white">
                Cadastrar Nova Receita
              </h1>
              <p class="text-h6 text-white">
                Compartilhe sua receita favorita com a comunidade
              </p>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>

    <v-row no-gutters class="form-section py-16">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="10" lg="8">
            <v-card class="form-card pa-8" elevation="4">
              <v-form ref="form" v-model="valid" @submit.prevent="submitForm">
                <v-row>
                  <v-col cols="12" class="mb-4">
                    <p class="mb-2 align-center">Nome da Receita</p>
                    <v-text-field
                      v-model="formData.titulo"
                      placeholder="Ex: Bolo de Chocolate"
                      :rules="[rules.required]"
                      variant="outlined"
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" class="mb-4">
                    <p class="mb-2 align-center">Descrição da Receita</p>
                    <v-textarea
                      v-model="formData.descricao"
                      placeholder="Descreva brevemente sua receita..."
                      :rules="[rules.required]"
                      variant="outlined"
                      rows="3"
                      required
                    ></v-textarea>
                  </v-col>

                  <v-col cols="12" class="mb-4">
                    <p class="mb-2 align-center">URL da Imagem</p>
                    <v-text-field
                      v-model="formData.imagem"
                      placeholder="https://exemplo.com/imagem.jpg"
                      :rules="[rules.required, rules.url]"
                      variant="outlined"
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="4" class="mb-4">
                    <p class="mb-2 align-center">Dificuldade</p>
                    <v-select
                      v-model="formData.dificuldade"
                      placeholder="Selecione a dificuldade"
                      :items="dificuldadeOptions"
                      :rules="[rules.required]"
                      variant="outlined"
                      required
                    ></v-select>
                  </v-col>

                  <v-col cols="12" md="4" class="mb-4">
                    <p class="mb-2 align-center">Tempo de Preparo</p>
                    <v-text-field
                      v-model="formData.tempo"
                      placeholder="Ex: 45 min"
                      :rules="[rules.required]"
                      variant="outlined"
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="4" class="mb-4">
                    <p class="mb-2 align-center">Porções</p>
                    <v-text-field
                      v-model="formData.porcoes"
                      placeholder="Ex: 4 pessoas"
                      :rules="[rules.required]"
                      variant="outlined"
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" class="mb-4">
                    <h3 class="text-h6 font-weight-bold mb-4 d-flex align-center">
                      <v-icon class="mr-2" color="#ee5a24 ">mdi-format-list-bulleted</v-icon>
                      Ingredientes
                    </h3>
                    <div v-for="(ingrediente, index) in formData.ingredientes" :key="index" class="d-flex align-center mb-2">
                      <v-text-field
                        v-model="formData.ingredientes[index]"
                        :label="`Ingrediente ${index + 1}`"
                        placeholder="Ex: 2 xícaras de farinha de trigo"
                        variant="outlined"
                        density="compact"
                        class="mr-2"
                      ></v-text-field>
                      <v-btn
                        v-if="formData.ingredientes.length > 1"
                        icon="mdi-delete"
                        variant="text"
                        color="error"
                        size="small"
                        @click="removeIngredient(index)"
                      ></v-btn>
                    </div>
                    <v-btn
                      color="#0b174c"
                      variant="outlined"
                      prepend-icon="mdi-plus"
                      @click="addIngredient"
                      class="mt-2"
                    >
                      Adicionar Ingrediente
                    </v-btn>
                  </v-col>

                  <v-col cols="12" class="mb-4">
                    <h3 class="text-h6 font-weight-bold mb-4 d-flex align-center">
                      <v-icon class="mr-2" color="#ee5a24 ">mdi-book-open-variant</v-icon>
                      Modo de Preparo
                    </h3>
                    <div v-for="(instrucao, index) in formData.instrucoes" :key="index" class="mb-4">
                      <div class="d-flex align-start">
                        <v-avatar color="#0b174c" size="32" class="mr-4 mt-1">
                          <span class="text-white font-weight-bold">{{ index + 1 }}</span>
                        </v-avatar>
                        <v-textarea
                          v-model="formData.instrucoes[index]"
                          :label="`Passo ${index + 1}`"
                          placeholder="Descreva o passo da receita..."
                          variant="outlined"
                          rows="2"
                          class="flex-grow-1"
                        ></v-textarea>
                        <v-btn
                          v-if="formData.instrucoes.length > 1"
                          icon="mdi-delete"
                          variant="text"
                          color="error"
                          size="small"
                          class="ml-2 mt-1"
                          @click="removeInstruction(index)"
                        ></v-btn>
                      </div>
                    </div>
                    <v-btn
                      color="#0b174c"
                      variant="outlined"
                      prepend-icon="mdi-plus"
                      @click="addInstruction"
                      class="mt-2"
                    >
                      Adicionar Passo
                    </v-btn>
                  </v-col>

                  <v-col cols="12" class="mb-6">
                    <p class="mb-2 align-center">Dicas do Chef (Opcional)</p>
                    <v-textarea
                      v-model="formData.dicas"
                      placeholder="Compartilhe dicas especiais para esta receita..."
                      variant="outlined"
                      rows="2"
                    ></v-textarea>
                  </v-col>

                  <v-col cols="12" class="d-flex justify-space-between">
                    <v-btn
                      color="grey"
                      variant="outlined"
                      size="large"
                      to="/catalogo_receitas"
                    >
                      <v-icon start>mdi-arrow-left</v-icon>
                      Cancelar
                    </v-btn>
                    <v-btn
                      color="#0b174c"
                      variant="flat"
                      size="large"
                      type="submit"
                      :loading="loading"
                      :disabled="!valid"
                    >
                      <v-icon start>mdi-content-save</v-icon>
                      {{ loading ? 'Salvando...' : 'Salvar Receita' }}
                    </v-btn>
                  </v-col>
                </v-row>
              </v-form>
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
  name: 'CadastrarReceita',
  setup() {
    const appStore = useAppStore()
    return { appStore }
  },
  created() {
    if (!this.appStore.isLogged) {
      this.$router.push('/login')
    }
  },
  data() {
    return {
      valid: false,
      loading: false,
      formData: {
        titulo: '',
        descricao: '',
        imagem: '',
            dificuldade: null,
        tempo: '',
        porcoes: '',
        ingredientes: [''],
        instrucoes: [''],
        dicas: ''
      },
      dificuldadeOptions: [
        { title: 'Fácil', value: 'Fácil' },
        { title: 'Médio', value: 'Médio' },
        { title: 'Difícil', value: 'Difícil' }
      ],
      rules: {
        required: value => !!value || 'Este campo é obrigatório',
        url: value => {
          if (!value) return true
          const pattern = /^https?:\/\/.+\.(jpg|jpeg|png|gif|webp)$/i
          return pattern.test(value) || 'URL da imagem inválida'
        }
      }
    }
  },
  methods: {
    addIngredient() {
      this.formData.ingredientes.push('')
    },
    removeIngredient(index) {
      if (this.formData.ingredientes.length > 1) {
        this.formData.ingredientes.splice(index, 1)
      }
    },
    addInstruction() {
      this.formData.instrucoes.push('')
    },
    removeInstruction(index) {
      if (this.formData.instrucoes.length > 1) {
        this.formData.instrucoes.splice(index, 1)
      }
    },
    async submitForm() {
      if (!this.valid) return

      this.loading = true

      try {
        const ingredientes = this.formData.ingredientes.filter(item => item.trim() !== '')
        const instrucoes = this.formData.instrucoes.filter(item => item.trim() !== '')

        if (ingredientes.length === 0) {
          alert('Adicione pelo menos um ingrediente')
          this.loading = false
          return
        }

        if (instrucoes.length === 0) {
          alert('Adicione pelo menos uma instrução')
          this.loading = false
          return
        }

        const novaReceita = {
          id: Date.now(),
          titulo: this.formData.titulo,
          descricao: this.formData.descricao,
          imagem: this.formData.imagem,
          dificuldade: this.formData.dificuldade,
          tempo: this.formData.tempo,
          porcoes: this.formData.porcoes,
          ingredientes: ingredientes,
          instrucoes: instrucoes,
          dicas: this.formData.dicas || null,
          dataCriacao: new Date().toISOString()
        }

        const receitasSalvas = JSON.parse(localStorage.getItem('receitasCadastradas') || '[]')
        receitasSalvas.push(novaReceita)
        localStorage.setItem('receitasCadastradas', JSON.stringify(receitasSalvas))

        alert('Receita cadastrada com sucesso!')
        
        this.$router.push('/catalogo_receitas')

      } catch (error) {
        console.error('Erro ao salvar receita:', error)
        alert('Erro ao salvar receita. Tente novamente.')
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
.create-header {
  background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
  position: relative;
}

.create-header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
  opacity: 0.1;
}

.form-section {
  background-color: #f8f9fa;
}

.form-card {
  border-radius: 16px !important;
}

@media (max-width: 600px) {
  .form-card {
    margin: 16px;
    padding: 16px !important;
  }
}
</style>
