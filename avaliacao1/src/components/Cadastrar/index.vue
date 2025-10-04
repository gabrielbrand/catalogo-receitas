<template>
  <div class="login">
    <div class="logo-container">
      <img class="gorecipe" src="../../../public/2.png" alt="Logo"/>
    </div>

    <h1>Cadastrar</h1>
    <div class="input-container">
      <p>Nome</p>
      <input 
        v-model="formData.name" 
        class="name" 
        type="text" 
        placeholder="Digite seu nome" 
      />
      <p>E-mail</p>
      <input 
        v-model="formData.email" 
        class="email" 
        type="email" 
        placeholder="Digite seu e-mail" 
      />
      <p>Senha</p>
      <input 
        v-model="formData.password" 
        class="senha" 
        type="password" 
        placeholder="Digite sua senha" 
      />
      <p>Repetir Senha</p>
      <input 
        v-model="formData.confirmPassword" 
        class="re-senha" 
        type="password" 
        placeholder="Repita sua senha" 
      />
    </div>
    <router-link class="link" to="/login">Já tem uma conta? Fazer login</router-link>

    <button 
      class="entrar" 
      @click="handleRegister"
      :disabled="appStore.getIsLoading"
    >
      {{ appStore.getIsLoading ? 'Cadastrando...' : 'Cadastrar' }}
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAppStore } from '@/stores/app'

const router = useRouter()
const appStore = useAppStore()

// Dados do formulário
const formData = ref({
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
})

const successMessage = ref('')

// Função para lidar com o registro
const handleRegister = async () => {
  // Limpar mensagens anteriores
  appStore.clearError()
  successMessage.value = ''
  
  // Validações básicas
  if (!formData.value.name || !formData.value.email || !formData.value.password) {
    appStore.error = 'Todos os campos são obrigatórios'
    return
  }
  
  if (formData.value.password !== formData.value.confirmPassword) {
    appStore.error = 'As senhas não coincidem'
    return
  }
  
  // Chamar a função de registro do store
  const result = await appStore.registerUser({
    name: formData.value.name,
    email: formData.value.email,
    password: formData.value.password
  })
  
  if (result.success) {
    successMessage.value = 'Conta criada com sucesso!'
    // Redirecionar para a página inicial após 2 segundos
    setTimeout(() => {
      router.push('/login')
    }, 2000)
  }
}
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

.name, .email, .senha, .re-senha{
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

.success-message {
  background-color: #e8f5e8;
  color: #2e7d32;
  padding: 10px;
  border-radius: 5px;
  margin: 10px 0;
  border: 1px solid #c8e6c9;
  width: 85%;
  text-align: center;
}

.entrar:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
