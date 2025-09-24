// 1. Troca de Banner Automática
function trocaBanner() {
  const banner = document.getElementById("banner")
  if (window.innerWidth < 600) {
    banner.src = "img/img2.jpg"
  } else {
    banner.src = "img/img1.jpg"
  }
}
window.addEventListener("resize", trocaBanner)
trocaBanner()

// 2. Troca de Imagem ao Clicar
const lampada = document.getElementById("lampada")
lampada.addEventListener("click", () => {
  if (lampada.src.includes("lampadaApagada")) {
    lampada.src = "img/lampadaAcessa.jpg"
  } else {
    lampada.src = "img/lampadaApagada.jpg"
  }
})

// 3. Mostrar/Esconder Imagem
const toggleBtn = document.getElementById("toggleBtn")
const toggleImg = document.getElementById("toggleImg")
toggleBtn.addEventListener("click", () => {
  if (toggleImg.style.display === "none") {
    toggleImg.style.display = "block"
  } else {
    toggleImg.style.display = "none"
  }
})

// 4. Troca de Foto de Perfil
const perfil = document.getElementById("perfil")
const trocarPerfil = document.getElementById("trocarPerfil")
let perfilAtivo = true

trocarPerfil.addEventListener("click", () => {
  if (perfilAtivo === true) {
    perfil.src = "img/perfil2.jpg"
    perfilAtivo = false
  } else {
    perfil.src = "img/perfil1.jpg"
    perfilAtivo = true
  }
})

// 5. Galeria
const thumbs = document.querySelectorAll(".thumb")
const imagemGrande = document.getElementById("imagemGrande")
thumbs.forEach(thumb => {
  thumb.addEventListener("click", () => {
    imagemGrande.src = thumb.src
  })
})

// 6. Banner com 3 Versões
function trocaBannerResponsivo() {
  const bannerR = document.getElementById("bannerResponsivo")
  if (window.innerWidth < 600) {
    bannerR.src = "img/celular.jpg"
  } else if (window.innerWidth <= 1024) {
    bannerR.src = "img/tablet.jpg"
  } else {
    bannerR.src = "img/computador.jpg"
  }
}
window.addEventListener("resize", trocaBannerResponsivo)
trocaBannerResponsivo()

// 7. Carrossel
const imagens = ["img/img1.jpg", "img/img2.jpg", "img/anavitoria.jpg"]
let indice = 0
const carrossel = document.getElementById("carrossel")

document.getElementById("depois").addEventListener("click", () => {
  indice = indice + 1
  if (indice >= imagens.length) {
    indice = 0 
  }
  carrossel.src = imagens[indice]
})

document.getElementById("antes").addEventListener("click", () => {
  indice = indice - 1
  if (indice < 0) {
    indice = imagens.length - 1 
  }
  carrossel.src = imagens[indice]
})

