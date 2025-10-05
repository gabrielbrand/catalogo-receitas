<template>
  <div class="login">
    <div class="logo-container">
      <img class="gorecipe" src="../../../public/2.png" alt="Logo"/>
    </div>

    <h1>Login</h1>
    
    
    
    <div v-if="appStore.getError" class="error-message">
      {{ appStore.getError }}
    </div>
    
    <div class="input-container">
      <p>E-mail</p>
      <input 
        v-model="email" 
        class="email" 
        type="email" 
        placeholder="Digite seu e-mail" 
      />
      <p>Senha</p>
      <input 
        v-model="password" 
        class="senha" 
        type="password" 
        placeholder="Digite sua senha" 
      />
    </div>
    <router-link class="link" to="/cadastrar">Não tem uma conta? Cadastre-se</router-link>

    <button @click="handleLogin" class="entrar">Entrar</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAppStore } from '@/stores/app.js';

const router = useRouter();
const appStore = useAppStore();
const email = ref('');
const password = ref('');

const handleLogin = () => {
  appStore.clearError();
  const result = appStore.login(email.value, password.value);
  
  if (result.success) {
    const redirectTo = sessionStorage.getItem('redirectAfterLogin');
    if (redirectTo) {
      sessionStorage.removeItem('redirectAfterLogin');
      router.push(redirectTo);
    } else {
      router.push('/');
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
