//Entrada de Dados
//1 - Boas Vindas
let nome = prompt("Qual seu nome?")
console.log("Boas-vindas", nome)

//2 - Mostrando valor digitado
const input = document.getElementById("input")
const botao = document.getElementById("botao")
const texto = document.getElementById("texto")

botao. addEventListener("click", () => {
    let texto2 = input.value
    texto.innerText = texto2
})
console.log("_________________________________")

//Conversão de Tipos
//1 - Soma de valores
let num1 = Number(prompt("Digite um número:"))
let num2 = Number(prompt("Digite outro número:"))

let soma = num1 + num2
console.log("A soma dos dois números é:", soma)

//2 - Concatenação
let valor = Number(prompt("Digite um valor:"))
console.log("Meu nome é", nome, ", eu digitei o valor:", valor)

//3 - Maioridade
let idade1 = Number(prompt("Digite sua idade:"))
if (idade1 >= 18) {
    console.log("Você é maior de idade")
}else {
    console.log("Você é menor de idade")
}
console.log("_________________________________")

//Funções de Texto
//1 - Manipulando Texto
let frase = prompt("Digite uma frase:")
console.log(frase)
console.log(frase.length) //conta letras e espaços
console.log(frase.toUpperCase()) //tudo maiusculo
console.log(frase.toLowerCase()) //tudo minusculo
console.log(frase.replace("gosto de", "amo")) //troca um pelo outro
console.log(frase.includes("gosto")) //se tem na frase
console.log(frase.charAt(5)) //o que tem nessa posição
console.log("_________________________________")

//Funções Matemáticas
//1 - Adivinhar o número
let aleatorio10 = Math.floor(Math.random()*10)+1
let chute = Number(prompt("Adivinhe o número entre 1 e 10:"))
if (chute === aleatorio10) {
    console.log("Parabéns! Você acertou o número:", aleatorio10)
} else {
    console.log("Você errou! O número era:", aleatorio10)
}

//2 - Arredondando valores
let decimal = Number(prompt("Digite um número decimal"))
console.log("Arredondado para cima: " + Math.ceil(decimal))
console.log("Arredondado para baixo: " + Math.floor(decimal))
console.log("Arredondado normalmente: " + Math.round(decimal))

//3 - Manipulando números
let maior = Math.max(1, 2, 4, 5, 3, 7, 8, 6, 9, 11) //maior número
let menor = Math.min(1, 2, 4, 5, 3, 7, 8, 6, 9, 11) //menor número
console.log("O maior valor é", maior)
console.log("O menor valor é", menor)

//4 - Novos valores
let n = 5
console.log("Número de forma absoluta: " + Math.abs(n))
console.log("Número elevado a 4: " + Math.pow(n, 4)) 
console.log("Raiz quadrada do número: " + Math.sqrt(n))
console.log("_________________________________")

//Datas
//1 - Mostrando a data
const data = document.getElementById("data")
const dataAtual = document.getElementById("dataAtual")

data.addEventListener("click", () => {
    const agora = new Date()
    const dataFormatada = agora.getDate() + "/" + (agora.getMonth() + 1) + "/" + agora.getFullYear() 
    dataAtual.innerText = "Hoje é: " + dataFormatada
})

//2 - Dia do aniversário
const hoje = new Date()
const dataPassada = new Date("2025-10-16")

const diferenca = dataPassada - hoje
const diasFaltando = Math.ceil(diferenca / (1000 * 60 * 60 * 24))

console.log("Faltam", diasFaltando, "dias para o meu aniversário(16/10)")
console.log("_________________________________")