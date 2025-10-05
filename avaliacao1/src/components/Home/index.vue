<template>
  <v-container fluid class="pa-0">
    <v-row no-gutters class="hero-section">
      <v-col cols="12">
        <v-container>
          <v-row align="center" justify="center" class="fill-height" style="min-height: 80vh;">
            <v-col cols="12" md="8" lg="6" class="text-center">
              <v-card flat color="transparent" class="hero-card">
                <h1 class="hero-title text-h2 text-md-h1 font-weight-bold mb-6">
                  Descubra Receitas
                  <span class="text-primary">Deliciosas</span>
                </h1>
                <p class="hero-subtitle text-h6 text-md-h5 mb-8 text-grey-darken-1">
                  Explore nosso catálogo completo de receitas e transforme sua cozinha em um verdadeiro laboratório culinário
                </p>
                <div class="d-flex flex-column flex-md-row gap-4 justify-center">
                  <v-btn
                    size="large"
                    color="#ffffff"
                    variant="flat"
                    class="px-8 py-3"
                    to="/catalogo_receitas"
                  >
                    <v-icon start>mdi-chef-hat</v-icon>
                    Explorar Receitas
                  </v-btn>
                  <v-btn
                    size="large"
                    color="#ffffff"
                    variant="outlined"
                    class="px-8 py-3"
                    to="/sobre"
                  >
                    <v-icon start>mdi-information</v-icon>
                    Sobre Nós
                  </v-btn>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>

    <v-row no-gutters class="features-section py-16">
      <v-container>
        <v-row>
          <v-col cols="12" class="text-center mb-12">
            <h2 class="text-h3 text-md-h2 font-weight-bold mb-4">
              Por que escolher nosso catálogo?
            </h2>
            <p class="text-h6 text-grey-darken-1">
              Oferecemos a melhor experiência culinária para todos os gostos
            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4" class="mb-8">
            <v-card flat class="feature-card text-center pa-6 h-100">
              <v-avatar size="80" color="#ef4545" class="mb-4">
                <v-icon size="40" color="white">mdi-book-open-variant</v-icon>
              </v-avatar>
              <h3 class="text-h5 font-weight-bold mb-4">Receitas Diversas</h3>
              <p class="text-body-1 text-grey-darken-1">
                Explore centenas de receitas de diferentes culturas e estilos culinários
              </p>
            </v-card>
          </v-col>
          <v-col cols="12" md="4" class="mb-8">
            <v-card flat class="feature-card text-center pa-6 h-100">
              <v-avatar size="80" color="#ef4545" class="mb-4">
                <v-icon size="40" color="white">mdi-clock-outline</v-icon>
              </v-avatar>
              <h3 class="text-h5 font-weight-bold mb-4">Fácil de Seguir</h3>
              <p class="text-body-1 text-grey-darken-1">
                Instruções passo a passo claras e detalhadas para garantir o sucesso
              </p>
            </v-card>
          </v-col>
          <v-col cols="12" md="4" class="mb-8">
            <v-card flat class="feature-card text-center pa-6 h-100">
              <v-avatar size="80" color="#ef4545" class="mb-4">
                <v-icon size="40" color="white">mdi-heart</v-icon>
              </v-avatar>
              <h3 class="text-h5 font-weight-bold mb-4">Feito com Amor</h3>
              <p class="text-body-1 text-grey-darken-1">
                Cada receita é cuidadosamente selecionada e testada por nossa equipe
              </p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-row>

    <v-row no-gutters class="cta-section">
      <v-col cols="12">
        <v-container>
          <v-row align="center" justify="center" class="py-16">
            <v-col cols="12" md="8" class="text-center">
              <h2 class="text-h3 text-md-h2 font-weight-bold mb-4 text-white">
                Pronto para começar sua jornada culinária?
              </h2>
              <p class="text-h6 text-white mb-8">
                Junte-se a milhares de pessoas que já descobriram o prazer de cozinhar
              </p>
              <v-btn
                size="x-large"
                color="white"
                variant="flat"
                class="px-12 py-4"
                to="/catalogo_receitas"
              >
                <v-icon start>mdi-arrow-right</v-icon>
                Começar Agora
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.hero-section {
  background: linear-gradient(135deg, #ef4545 0%, #e47b1a 100%);
  color: white;
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
  opacity: 0.1;
}

.hero-card {
  position: relative;
  z-index: 1;
}

.hero-title {
  line-height: 1.2;
}

.hero-subtitle {
  line-height: 1.6;
  color: #fcfcfc !important;
}

.hero-title .text-primary {
  color: #ffffff !important;
}

.features-section {
  background-color: #f8f9fa;
}

.feature-card {
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
  border-radius: 16px !important;
}

.cta-section {
  background: linear-gradient(135deg, #ef4545 0%, #e47b1a 100%);
  position: relative;
}

.cta-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23dots)"/></svg>');
  opacity: 0.1;
}

.gap-4 {
  gap: 1rem;
}

@media (max-width: 960px) {
  .hero-title {
    font-size: 2.5rem !important;
  }
  
  .hero-subtitle {
    font-size: 1.25rem !important;
  }
}

@media (max-width: 600px) {
  .hero-title {
    font-size: 2rem !important;
  }
  
  .hero-subtitle {
    font-size: 1.125rem !important;
  }
}
</style>
