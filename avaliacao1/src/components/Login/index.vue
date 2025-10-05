<template>
  <div class="login">
    <v-card v-if="!appStore.isLogged">
    <div class="logo-container">
      <img class="gorecipe" src="../../../public/2.png" alt="Logo"/>
    </div>

    <h1>Login</h1>
    
    <!-- Mensagem informativa -->
    <div class="info-message">
      <v-icon color="info" class="mr-2">mdi-information</v-icon>
      Faça login para criar e compartilhar suas receitas
    </div>
    
    <!-- Mensagem de erro -->
    <div v-if="appStore.getError" class="error-message">
      {{ appStore.getError }}
    </div>
    
    <v-card class="input-container">
      <p>E-mail</p>
      <v-text-field v-model="email" class="email" type="text" placeholder="Digite seu e-mail" />
      <p>Senha</p>
      <v-text-field v-model="password" class="senha" type="password" placeholder="Digite sua senha" />
    </v-card>
    <v-btn class="link" to="/cadastrar">Não tem uma conta? Cadastre-se</v-btn>

    <v-btn @click="handleLogin" class="entrar">Entrar</v-btn>
    </v-card>
    <v-card v-else>
      <v-card-title>Bem-vindo de volta, {{ appStore.getUser.name }}</v-card-title>
      <v-card-subtitle>{{ appStore.getUser.email }}</v-card-subtitle>
      <v-card-actions>
        <v-btn block color="red" size="large" variant="tonal" @click="appStore.logout()">Sair</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAppStore } from '@/stores/app.js';

const appStore = useAppStore();
const email = ref('');
const password = ref('');

const handleLogin = () => {
  appStore.clearError();
  const result = appStore.login(email.value, password.value);
  
  if (result.success) {
    // Verificar se há um redirect pendente
    const redirectTo = sessionStorage.getItem('redirectAfterLogin');
    if (redirectTo) {
      sessionStorage.removeItem('redirectAfterLogin');
      window.location.href = redirectTo;
    }
  } else {
    console.error('Erro no login:', appStore.getError);
  }
};
</script>

<style scoped>
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: top;
  width: 30%;
  margin: 80px auto;
  border-radius: 12px;
  background: #F1F3F6;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  gap: 10px;
}

.logo-container {
  display: flex;
  flex-direction: column;
}

.gorecipe {
  align-self: center;
  margin-top: -10%;
  width: 90%;
  height: 90%;
}

.input-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85%;
}

.input-container p {
  align-self: start;
  font-size: 15px;
  color: #0B174C;
  margin-left: 40px;
}

.email, .senha{
  width: 85%;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 15px;
  padding: 8px;
  margin-bottom: 10px;
}

.entrar {
  background-color: #0B174C;
  border: 1px solid #0B174C;
  color: white;
  padding: 10px;
  padding-inline: 30px;
  font-size: 15px;
  cursor: pointer;
  border-radius: 6px;
  margin-bottom: 20px;
  
}

.entrar:hover {
  background-color: #142f5b;
  font-size: 15px;
}

.login h1 {
  margin: 5px 0;
  color: #0B174C;
  margin-top: -35%;
}

.link {
  font-size: 16px;
  color: #0B174C;
  text-decoration: none;
  margin-top: 5px;
  margin-bottom: 5px;
}

.info-message {
  background-color: #e3f2fd;
  color: #1976d2;
  padding: 10px;
  border-radius: 5px;
  margin: 10px 0;
  border: 1px solid #bbdefb;
  width: 85%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.error-message {
  background-color: #ffebee;
  color: #c62828;
  padding: 10px;
  border-radius: 5px;
  margin: 10px 0;
  border: 1px solid #ffcdd2;
  width: 85%;
  text-align: center;
}
</style>
