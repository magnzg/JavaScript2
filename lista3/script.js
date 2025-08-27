//Função declarativa
function saudacao(){
console.log("Olá")
}

saudacao()//chamando a função

//Função com parâmetro
let nome = prompt("Digite seu nome:")
function saudar(nome){
    return "Olá, " + nome + "!"
}
console.log(saudar(nome))

//Função Anônima
let mostrarMensagem = function(){
    console.log("Hoje está frio!")
}

mostrarMensagem()

//Arrow Function
let n1 = Number(prompt("Digite um número:"))
let n2 = Number(prompt("Digite outro número:"))
const multiplicacao = (n1, n2) => {
    return n1 * n2
}
console.log(multiplicacao(n1, n2))

//Trocando Textos
let paragrafo = document.getElementById("mensagem")
botao.addEventListener("click", function(){
    paragrafo.innerText = "Texto Alterado com JS"
})

//Personalizando a Página
function mudarCor(){
    document.body.style.backgroundColor = "blue"
}

//Adicionando elementos
function adicionarItem() {
      let lista = document.getElementById("minhaLista")
      let novoItem = document.createElement("li")
      novoItem.textContent = "Novo Item"
      lista.appendChild(novoItem)
}

//Removendo paragrafo
function removerParagrafo() {
      let p = document.getElementById("meuParagrafo")
      p.remove()
}

//Personalização
function personalizar() {
      let texto = document.getElementById("texto")
      let titulo = document.getElementById("titulo")

      texto.style.color = "blue"
      texto.style.fontSize = "20px"

      titulo.style.color = "green"
      titulo.style.fontSize = "35px"
}

//Digitação
function mostrarNome(){
    let nome = document.getElementById("nome").value
    document.getElementById("resposta").innerText = "Você digitou: " + nome
}

//Troca de Texto
function mudarCor2(){
    document.getElementById("caixa").innerText = "Você passou o mouse"
}

function corOriginal(){
    document.getElementById("caixa").innerText = "Passe o mouse aqui"
}

//Escondendo elementos
function esconder() {
      document.getElementById("paragrafo").style.display = "none"
    }

//Alterando a fonte
    function alterarFonte() {
      let tamanho = Math.floor(Math.random() * (40 - 10 + 1)) + 10
      document.getElementById("texto2").style.fontSize = tamanho + "px"
    }
