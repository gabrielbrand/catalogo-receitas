<template>
    <div class="login">
        <img class="logo" src="../../../public/logo.png" alt="Logo" width="200" height="200"/>
        <br />
        <h1>Login</h1>
        <input class="usuario" type="text" placeholder="Usuário" /><br /><br />
        <input class="senha" type="password" placeholder="Senha" /><br /><br />


        <router-link to="/cadastrar">Clique aqui para cadastrar</router-link>

        <button class="btn1">Entrar</button>

    </div>
</template>

<script setup></script>

<style scoped>

.login {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 30%;
    height: 50%;
    margin: 100px auto;
    border-radius: 12px;
    background: white;
}

.logo {
    margin-top: 20px;
}

.usuario, .senha {
    width: 50%;
    border-radius: 5px;
    border: 1px solid #ccc;
    box-sizing: border-box;
    font-size: 16px;
}

.btn1 {
    background-color: black;
    border: none;
    color: white;
    width: 50%;
    height: 10%;
    margin: 20px 0;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 6px;
}
.login h1 {
    margin-bottom: 40px;
    margin: 0;
}

p {
    margin: 0;
    padding: 0;
}

</style>

<style>
body {
  background: #F1F3F6;
  font-family: 'Inter', sans-serif;
  margin: 0;        
}
</style>