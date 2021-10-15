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

    if (nomeUsuario.value != '') {

        if (salario.value != 0 || salario.value != '') {

            nome.innerHTML = nomeUsuario.value;
            valorSalario.innerHTML = salario.value;
            container.style = " transform: rotateY(180deg);";

        } else {

            alert("O salário digitado não é válido!")
            alert("informe um salário válido!");
            nomeUsuario.focus();
        }

            

    } else {

        alert("O nome digitado não é válido!")
        alert("informe um nome válido!");
        nomeUsuario.focus();

    }
    
});

//Criação das listas
btnCadDespesa.addEventListener("click", addValores); 


function addValores () {

    if (nomeDespesa.value != '') { 

        if (valorDespesa.value != 0 || valorDespesa.value != '') {

            // Cria as variáveis Li com seus valores digitados
            var liNome = '<li>' + nomeDespesa.value + '</li>';
            var liValor = '<li>' + valorDespesa.value + '</li>';
            
            // Faz as Uls receberem as lis
            listaNome.innerHTML += liNome;
            listaValor.innerHTML += liValor;

            // Zera os valores dos inputs
            nomeDespesa.value = '';
            valorDespesa.value = '';

            testando = valorSalario.value = valorDespesa.value;
            valorSalario.value = testando;
            valorDespesa.value = testando;

            // Dá foco na variável especificada que nese caso é o input.
            nomeDespesa.focus();

        } else {

            alert("O valor digitado não é válido!")
            alert("informe um valor válido!");
            nomeUsuario.focus();
    
        }

    } else {

        alert("A despesa digitada não é válida!")
        alert("informe uma despesa válido!");
        nomeUsuario.focus();

    }
    
}