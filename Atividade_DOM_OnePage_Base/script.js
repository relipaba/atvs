function escuro(){
    document.body.style.backgroundColor = '';
    document.body.classList.toggle("escuro");

    const botao = document.querySelector("#btnCor");
    if (document.body.classList.contains("escuro")) {
    botao.innerText = "Modo Claro";
    } else {
    botao.innerText = "Modo Escuro";
    }
}

function mudaCor(cor){
    document.body.style.backgroundColor = cor;
}

function verifica(){
    let nome = document.getElementById("nome").value.trim();
    let idade = Number(document.getElementById("idade").value);
    let email = document.getElementById("email2").value.trim();
    let password = document.getElementById("senha").value;
    let confirma = document.getElementById("confirmaSenha").value;
    let mensagem = document.getElementById("msg");

    if(nome === ""){
        mensagem.innerText = "Insira um nome"
        mensagem.style.color = 'red';
    } else if(email == ""){
        mensagem.innerText = "Insira um email"
        mensagem.style.color = 'red';
    } else if (idade <16) {
        mensagem.innerText = "Idade tem que ser no minimo 16!"
        mensagem.style.color = 'red';
    } else if(password.length < 6){
        mensagem.innerText = "Senha precisa de no minimo 6 digitos"
        mensagem.style.color = 'red';
    } else if(password !== confirma){
        mensagem.innerText = "As senhas precisam ser iguais"
        mensagem.style.color = 'red';
    } else {
        mensagem.innerText = "TUDO CERTO!"
        mensagem.style.color = 'green';
        document.getElementById("verificar").reset();
    }
}

