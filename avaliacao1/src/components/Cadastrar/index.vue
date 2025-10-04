<template>
  <div class="login">
    <div class="logo-container">
      <img class="gorecipe" src="../../../public/2.png" alt="Logo"/>
    </div>

    <h1>Cadastrar</h1>
    <div class="input-container">
      <p>E-mail</p>
      <input class="email" type="text" placeholder="Digite seu e-mail" />
      <p>Senha</p>
      <input class="senha" type="password" placeholder="Digite sua senha" />
      <p>Repetir Senha</p>
      <input class="re-senha" type="password" placeholder="Repita sua senha" />
    </div>
    <router-link class="link" to="/login">Já tem uma conta? Fazer login</router-link>

    <button class="entrar">Cadastrar</button>
  </div>
</template>

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

.email, .senha, .re-senha{
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
</style>
