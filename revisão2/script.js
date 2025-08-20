//Entrada de Dados
let nome = prompt("Qual seu nome?")
console.log("Oi", nome)

const input = document.getElementById("input")
const botao = document.getElementById("botao")
const texto = document.getElementById("texto")

botao. addEventListener("click", () => {
    let texto2 = input.value
    texto.innerText = "Seu nome e " + texto2
})
// Conversor de Valores
const converter = document.getElementById("converter")
const valor = document.getElementById("valor")
const resultado = document.getElementById("resultado")

converter.addEventListener("click", () => {
    let texto3 = valor.value
    let numero = Number(texto3)
    let dobro = numero * 2

    resultado.innerText = "O dobro do número é " + dobro
})
//Funções de Texto
const manipular = document.getElementById("manipular")
const mensagem = document.getElementById("mensagem")

manipular.addEventListener("click", () => {
    let frase = "Eu gosto de JavaScript"
    let alterado = frase.replace("gosto", "gosto muito")
    let novo = alterado.toUpperCase()
    mensagem.innerText = novo
})
//-----------------------------
let frase2 = "Eu gosto de Harry Potter"
console.log(frase2)
console.log(frase2.length) //conta letras e espaços
console.log(frase2.toUpperCase()) //tudo maiusculo
console.log(frase2.toLowerCase()) //tudo minusculo
console.log(frase2.includes("gosto")) //se tem na frase
console.log(frase2.charAt(5)) //o que tem nessa posição
console.log(frase2.replace("gosto de", "amo")) //troca um pelo outro
//Funções Matemáticas
let potencia = Math.pow(2,3) //2³
let potencia2 = Math.pow(8, 64) //pow = potência
console.log(potencia)
console.log(potencia2)
//-----------------------------
let arredondado1 = Math.round(4.6)
let arredondado2 = Math.round(4.2)

let arredondado3 = Math.floor(5.8) //arredonda para baixo
let arredondado4 = Math.ceil(5.2) //arredonda para cima

console.log("round 4.6" , arredondado1)
console. log("round 4.2" , arredondado2)
console.log("floor 5.8" , arredondado3)
console.log("ceil 5.2" , arredondado4)
//------------------------------
let maior = Math.max(5, 10, 8, 6, 2, 30) //maior número
let menor = Math.min(5, 10, 8, 6, 2, 30) //menor número
console.log("O maior valor é",maior)
console.log("O menor valor é",menor)
//------------------------------
let raiz = Math.sqrt(25)
let absoluto = Math. abs(-8)
console.log(raiz)
console.log(absoluto)
//-------------------------------
//Gerar número entre 1 e 10
let aleatorio10 = Math.floor(Math.random()*10)+1
console.log(aleatorio10)
//------------------------------
//DATAS
const data = document.getElementById("data")
const dataAtual = document.getElementById("dataAtual")

data.addEventListener("click", () => {
    const agora = new Date()
    const dataFormatada = agora.getDate() + "/" + (agora.getMonth() + 1) + "/" + agora.getFullYear() 
    dataAtual.innerText = "Hoje é: " + dataFormatada
})

const hoje = new Date()
const dataPassada = new Date("2025-06-15")

const diferenca = hoje - dataPassada
const diasPassados = Math.floor(diferenca / (1000 * 60 * 60 * 24))

console.log("Se passram", diasPassados, "dias desde 15/06/2025")