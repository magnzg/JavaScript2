// Operadores Aritméticos
// 1 - Área de um Retângulo
let largura = Number(prompt("Digite a largura:"))
let altura = Number(prompt("Digite a altura:"))
let area = largura * altura
console.log("Área:", area)

// 2 - Dobro e Metade
let numero = 20
console.log("Dobro:", numero * 2)
console.log("Metade:", numero / 2)

// 3 - Média Aritmética
let n1 = 8, n2 = 6, n3 = 7
let media = (n1 + n2 + n3) / 3
console.log("Média:", media)

// 4 - Conversão de Temperatura
let celsius = 30
let fahrenheit = (celsius * 9/5) + 32
console.log("Temperatura em Fahrenheit:", fahrenheit)

// Operadores Relacionais
// 1 - Comparando dois números
let a = 15, b = 10
console.log(a > b)
console.log(a <= b)
console.log(a == b)

// 2 - Maioridade
let idade = 65
console.log("Maior de idade:", idade >= 18)
console.log("Idoso:", idade >= 60)

// Estrutura Condicional - if else
// 1 - Verificação de Maioridade
let idade1 = Number(prompt("Qual a sua idade?"))
if (idade1 >= 18) {
    console.log("Você é maior de idade")
} else {
    console.log("Você é menor de idade")
}

// 2 - Verificação de Aprovado
let nota = Number(prompt("Qual sua nota?"))
if (nota >= 7) {
    console.log("Aprovado")
} else {
    console.log("Reprovado")
}

// 3 - Verificar Temperatura
let temp = Number(prompt("Qual a temperatura hoje?"))
if (temp >= 30) {
  console.log("Está quente")
} else {
  console.log("Está frio")
}


// 4 - Classificação de Idade
let idadep = Number(prompt("Qual a sua idade?"))
if (idadep < 12) {
  console.log("Criança")
} else if (idadep < 17){
  console.log("Adolescente")
} else if (idadep < 59){
  console.log("Adulto")
} else {
  console.log("Idoso")
}

// 5 - Sistema de Notas Escolares
let notas = Number(prompt("Qual a sua nota?"))
if (notas > 90) {
  console.log("A")
} else if (notas > 80){
  console.log("B")
} else if (notas > 70){
  console.log("C")
} else if (notas > 60){
  console.log("D")
} else {
  console.log("F")
}

// 6 - Classificação de Pistas
let distancia = Number(prompt("Qual a distância da pista de corrida em metros?"))
if (distancia < 400) {
  console.log("Pista curta")
} else if (distancia < 800){
  console.log("Pista média")
} else if (distancia < 1500){
  console.log("Pista longa")
} else {
  console.log("Pista muito longa")
}

// 7 - Pontuação de Jogo
let pontos = Number(prompt("Qual a sua pontuação?"))
if (pontos < 1000){
  console.log("Iniciante")
} else if (pontos < 5000){
  console.log("Intermediário")
} else if (pontos < 10000){ 
  console.log("Avançado")
} else {
  console.log("Mestre")
}


// Operadores Lógicos
// 1 - Elegível para Promoção
let anosTrabalho = Number(prompt("Quantos anos você trabalha na empresa?"))
let projetos = Number(prompt("Quantos projetos você realizou?"))
if (anosTrabalho >= 5 || projetos > 10) {
    console.log("Você está elegível para promoção")
} else {
    console.log("Você não está elegível para promoção")
}

// 2 - Entrar em um Evento
let idad = Number(prompt("Qual a sua idade?"))
if (idad >= 18 && idad <= 30) {
    console.log("Você pode entrar no evento")
} else {
    console.log("Você não pode entrar no evento")
}

// 3 - Verificação de Login Avançada
let usuario = prompt("Digite o nome de usuário:")
let senha1 = Number(prompt("Digite a senha:"))
if (usuario === "admin" && senha1 === "1234") {
    console.log("Login bem-sucedido")
} else {
    console.log("Nome de usuário ou senha incorretos")
}

// 4 - Intervalo de Valores
let num = Number(prompt("Digite um número:"))
if (num >= 10 && num <= 20) {
    console.log("O número está dentro do intervalo entre 10 e 20")
} else if (num >= 30 && num <= 50) {
    console.log("O número está dentro do intervalo entre 30 e 50")
} else {
    console.log("Ele não está dentro do intervalo de 10 e 20 nem 30 e 50")
}

// Switch Case
// 1 - Dias da Semana
let dia = Number(prompt("Digite um número de 1 a 7:"))
switch (dia) {
  case 1: console.log("Domingo"); break
  case 2: console.log("Segunda-feira"); break
  case 3: console.log("Terça-feira"); break
  case 4: console.log("Quarta-feira"); break
  case 5: console.log("Quinta-feira"); break
  case 6: console.log("Sexta-feira"); break
  case 7: console.log("Sábado"); break
  default: console.log("Número inválido")
}

// 2 - Classificação Idade
let idadeEsportiva = Number(prompt("Digite uma idade:"))
switch (idadeEsportiva) {
  case 5: console.log("Infantil A"); break
  case 10: console.log("Infantil B"); break
  case 15: console.log("Juvenil A"); break
  case 20: console.log("Juvenil B"); break
  case 30: console.log("Adulto"); break
  default: console.log("Idade inválida")
}

// 3 - Turno de Trabalho
let turno = prompt("Informe seu turno:")
switch (turno) {
  case "M": console.log("Bom dia!"); break
  case "V": console.log("Boa tarde!"); break
  case "N": console.log("Boa noite!"); break
  default: console.log("Turno inválido")
}

// 4 - Estações do Ano
let estacao = Number(prompt("Informe um número de 1 a 4:"))
switch(estacao) {
  case 1: console.log("Primavera"); break
  case 2: console.log("Verão"); break
  case 3: console.log("Outono"); break
  case 4: console.log("Inverno"); break
  default: console.log("Estação inválida")
}

// While
let contador = 1
while(contador <= 10) {
  console.log(contador)
  contador++
}

let regressiva = 10
while(regressiva >= 1) {
  console.log(regressiva)
  regressiva--
}

let senha = ""
while(senha !== "12345") {
  senha = prompt("Digite a senha: ")
}

let sequencia = 0
while(sequencia <= 100) {
  console.log(sequencia)
  sequencia += 5
}

let cont = 0
while(cont < 5) {
  console.log("Eu gosto de JavaScript")
  cont++
}

// Do...While
let contador1 = 1
do {
  console.log(contador1)
  contador1++
} while(contador1 <= 20)

let continuar
do {
  continuar = prompt("Deseja continuar? (s/n)")
} while (continuar === "s")

let limite = Number(prompt("Digite um número: "))
let l = 1
do {
  console.log(l)
  l++
} while (l <= limite)

let par = 1
do {
  console.log(par)
  par += 2
} while (par <= 31)

// For
for (let c = 1; c <= 30; c++) {
  console.log(c)
}

for (let r = 30; r >= 1; r--) {
  console.log(r)
}

let inicio = 10
let fim = 20
for (let p = inicio; p <= fim; p++) {
  console.log(p)
}

for (let s = 50; s >= 30; s--) {
  console.log(s)
}

for (let n = 1; n <= 50; n += 2) {
  console.log(n)
}

// Array
let filmes = ["Harry Potter e a Pedra Filosofal", "Jurassic World: Domínio", "De Repente Uma Família"]
console.log(filmes[0])

let frutas = ["maçã", "banana", "laranja", "uva", "melancia"]
console.log(frutas[2])

let cores = ["azul", "vermelho", "verde"]
cores.push("amarelo")
for (let i = 0; i < cores.length; i++) {
  console.log(cores[i])
}

let numeros = [1, 2, 3, 4]
numeros.pop()
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i])
}

let cidades = ["Poá", "Suzano"]
cidades.unshift("Mogi")
for (let i = 0; i < cidades.length; i++) {
  console.log(cidades[i])
}
