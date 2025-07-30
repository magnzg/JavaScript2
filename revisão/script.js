//SCRIPT.JS

//Variaveis
let nome = "Maria"
let idade = 17

//Concatenação
console.log("Meu nome é", nome, "e tenho", idade, "anos.")
let valor = prompt("Digite um valor:")

console.log(valor)

//Operadores Aritméticos
let num1 = 3
let num2 = 2

let soma = num1 + num2
let subtracao = num1 - num2
let multiplicacao = num1 * num2
let divisao = num1 / num2
let resto = num1 % num2

console.log(soma)
console.log(subtracao)
console.log(multiplicacao)
console.log(divisao)
console.log(resto)

// Operadores Relacionais
let valor1 = 10
let valor2 = 5
console.log(valor1 > valor2)
console.log(valor1 >= valor2)
console.log(valor1 < valor2)
console.log(valor1 <= valor2)
console.log(valor == valor2)
console.log(valor1 != valor2)

// Estrutura condicional
let idade1 = 18
if (idade1 >= 18) {
    console.log("Você é maior de idade")
}else {
    console.log("Você é menor de idade")
}

let numero = Number(prompt("Digite um número: "))
if(numero > 0) {
    console.log("é maior que 0")
} else if(numero < 0) {
    console.log("é menor de idade")
} else {
    console.log("é igual a 0")
}

// Operadores Lógicos
let alunoSesi = true 
let ensinoMedio = true
if (alunoSesi && ensinoMedio) {
    console.log("Pode fazer curso Técninco")
}

let numero1 = Number (prompt("Informe um Número"))
if(numero1 >= 10 && numero1 <= 20) {
    console.log("Esa entre 10 e 20")
} //tudo tem que ser verdade
let numero2 = Number (prompt("Informe outro número"))

if(numero2 == 10 || numero2 == 20) {
    console.log("O número é igual a 10 ou 20")
}// Um tem q ser verdade

//Swith case
let opcao = 2
switch(opcao) {
    case 1:
        console.log("Você escollheu a opção 1")
        break
    case 2:
        console.log("Você escollheu a opção 2")
        break
    default:
        console.log("Opção invalida")
}

//Laço de Repetição - While
let numero3 = 1
while(numero3 <= 10) {
    console.log(numero3)
    numero3 += 1
}
let numero4 = 10
while(numero4 >= 10) {
    console.log(numero3)
    numero4 -= 1
}
let resposta = "não"
while(resposta == "não") {
    resposta = prompt("Deseja sair?")
}

//Laço de Repetição - Do...While
let contador = 0
do {
    console.log(contador)
    contador += 1
} while(contador <= 10)
//Laço de Repetição - For
for(let contador1 = 0; contador1 <= 10; contador1 += 1) {
    console.log(contador1)
}
// Array
let frutas = ["maçã", "banana", "laranja"]
console.log(frutas.length) // Tamanho do array
frutas.push("uva") // Adiciona no final 
frutas.pop() // Remove o último 
frutas.shift() // Remove o primeiro
frutas.unshift("manga") // Adiciona no início

for(let i = 0; i < frutas.length; i += 1) {
    console.log(frutas[i])
} //Mostrar o Array