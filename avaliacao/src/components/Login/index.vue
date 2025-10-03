<template>
    <div class="login">
        <img class="logo" src="../../../public/2.png" alt="Logo"/>
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
    background: #0B174C;
}

.logo {
    width: 250px;
    height: 250px;
}


.usuario, .senha {
    width: 50%;
    border-radius: 5px;
    border: 1px solid #ccc;
    box-sizing: border-box;
    font-size: 16px;
}

.btn1 {
    background-color: white;
    border: none;
    color: #0B174C;
    width: 50%;
    height: 10%;
    margin: 20px 0;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 6px;
}
.login h1 {
    margin: 0;
    color: white;
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