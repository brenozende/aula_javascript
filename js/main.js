

function botao(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://google.com"); //abrir página em outra aba
    //window.location.href = "https://google.com"; //abrir página na mesma aba
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

//Funções
/*
function soma(n1, n2){
    return n1 + n2;
}

function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}
var idade = prompt("Sua idade:");
console.log(validaIdade(idade));
alert(soma(5, 10));
*/

//Datas em JS
/*
var d = new Date();
alert(d);
alert(d.getDate());
alert(d.getHours());
alert(d.getMinutes());
*/

//Laço com for
/*
var count;
for(count = 0; count <=5; count++){
    alert(count);
}
*/

//Laço com while
/*
var count = 0;
while (count < 5){
    console.log(count);
    count++;
}
*/

//Comandos condicionais (if/else)
/*
var idade = prompt("Qual sua idade");
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
}
*/

//Lista de dicionarios
/*
var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}, {nome:"pera", cor:"verde"}];
console.log(frutas);
alert(frutas[1].cor);
*/

//Dicionarios
/*
var fruta = {nome:"maça", cor:"vermelha"};
console.log(fruta.nome);
alert(fruta.cor);
*/

//Listas
/*
var lista = ["maçã", "pera", "laranja"];
lista.push("uva");
lista.pop();
console.log(lista);
console.log(lista.toString());
console.log(lista.join(", "));
*/

//Variáveis, console, alert e strings
/*
var nome = "Breno Rezende";
var n1 = 5;
var n2 = 3;
var frase = "Japão é o melhor time do mundo";
alert(nome + " tem " + idade + " anos.");
alert(idade + idade2);
console.log(nome);
console.log(n1 * n2);
console.log(frase.toUpperCase());
alert(frase.replace("melhor", "pior"));
*/