// variáveis que irão receber nome e salário do usuário
var nomeUsuario = document.querySelector('.nomeUsuario');
var salario = document.querySelector('.salario');

// variáveis que irão passar os valores digitados para a main
var nome = document.querySelector('.nome');
var valorSalario = document.querySelector('.valorSalario');

// variáveis que irão receber os valores das despesas
var nomeDespesa = document.querySelector('.nomeDespesa');
var valorDespesa = document.querySelector('.valorDespesa');

// variáveis que irão receber as Uls para criar as listas
var listaNome = document.querySelector('.listaNome');
var listaValor = document.querySelector('.listaValor');

//variáveis de botões
var btnCadastro = document.querySelector('.cad');
var btnCadDespesa = document.querySelector('.cadDespesa');

// variáveis de Divs
var container = document.querySelector('.container');
var flip = document.querySelector('.flip-card');

// Evento de cadastro que irá trocar as divs permitindo o uso do programa
btnCadastro.addEventListener("click", function() {
    nome.innerHTML = nomeUsuario.value;
    valorSalario.innerHTML = salario.value;
    container.style = " transform: rotateY(180deg);";
    flip.style = "height: 800px;";
    flip.style = "width: 600px;";

});

//Criação das listas
btnCadDespesa.addEventListener("click", function() {
    
    listaNome += "<li>"+ nomeDespesa.value +"<li>";
    listaValor += "<li>"+ valorDespesa.value +"<li>";
    
});