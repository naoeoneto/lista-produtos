let bodyLoja = document.querySelector("body")
let headerLoja = document.createElement("header")
let nomeLoja = document.createElement("h1")
let mainLoja = document.createElement("main")
let secaoCategoria = document.createElement("section")
let categoria = document.createElement("div")
let botaoCategoria01 = document.createElement("button")
let botaoCategoria02 = document.createElement("button")
let botaoCategoria03 = document.createElement("button")
let botaoCategoria04 = document.createElement("button")
let filtro = document.createElement("div")
let filtroPesquisa = document.createElement("input")
let filtroBotao = document.createElement("button")
let imagemBotao = document.createElement("img")
let secaoCarrinho = document.createElement("section")
let divCarrinho = document.createElement("div")
let imagemCarrinho = document.createElement("img")
let valorCarrinho = document.createElement("span")
let textoCarrinho = document.createElement("p")
let secaoProdutos = document.createElement("section")
let divProdutos = document.createElement("div")
let listaProdutos = document.createElement("ul")

secaoCategoria.classList.add("filtersContainer")
botaoCategoria01.className = "estiloGeralBotoes"
botaoCategoria02.className = "estiloGeralBotoes"
botaoCategoria03.className = "estiloGeralBotoes"
botaoCategoria04.className = "estiloGeralBotoes"
botaoCategoria01.classList.add("estiloGeralBotoes--filter")
botaoCategoria02.classList.add("estiloGeralBotoes--filter")
botaoCategoria03.classList.add("estiloGeralBotoes--filter")
botaoCategoria04.classList.add("estiloGeralBotoes--filter")
filtro.classList.add("containerBuscaPorNome")
filtroPesquisa.classList.add("campoBuscaPorNome")
filtroBotao.classList.add("estiloGeralBotoes--botaoBuscaPorNome")
secaoCarrinho.classList.add("priceContainer")
secaoProdutos.classList.add("containerVitrine")
divProdutos.classList.add("containerListaProdutos")
categoria.id = "botoesContainer"
nomeLoja.innerText = "Shop Now"
botaoCategoria01.innerText = "Todos Produtos"
botaoCategoria02.innerText = "Hortifruti"
botaoCategoria03.innerText = "Panificadora"
botaoCategoria04.innerText = "Laticínios"
textoCarrinho.innerText = "Valor total dos produtos da sessão selecionada"
imagemBotao.src = "./src/img/search.png"
imagemCarrinho.src = "./src/img/alert-circle.png"
imagemBotao.alt = "lupa"
imagemCarrinho.alt = "exclamação de alerta"
filtroPesquisa.type = "text"
filtroPesquisa.placeholder = "Pesquisar por"

bodyLoja.append(headerLoja, mainLoja)
headerLoja.appendChild(nomeLoja)
mainLoja.append(secaoCategoria, secaoCarrinho, secaoProdutos)
secaoCategoria.append(categoria, filtro)
categoria.append(botaoCategoria01, botaoCategoria02, botaoCategoria03, botaoCategoria04)
filtro.append(filtroPesquisa, filtroBotao)
filtroBotao.appendChild(imagemBotao)
secaoCarrinho.appendChild(divCarrinho)
divCarrinho.append(imagemCarrinho, textoCarrinho)
secaoProdutos.appendChild(divProdutos)
divProdutos.appendChild(listaProdutos)

function renderizarProduto(arr){
for(let i = 0; i < arr.length; i++){
    let cardProduto = document.createElement("li")
    let imagemProduto = document.createElement("img")
    let nomeProduto = document.createElement("h3")
    let tipoProduto = document.createElement("span")
    let precoProduto = document.createElement("p")

    imagemProduto.src = `${arr[i].img}`
    imagemProduto.alt = `Imagem ${arr[i].nome}`
    nomeProduto.innerText = `${arr[i].nome}`
    tipoProduto.innerText = `${arr[i].secao}`
    precoProduto.innerText = `R$ ${arr[i].preco},00`

    listaProdutos.appendChild(cardProduto)
    cardProduto.append(imagemProduto, nomeProduto, tipoProduto, precoProduto)
    }
}
renderizarProduto(produtos)


function somaProdutos(arr){
    let soma = 0
    for(let i = 0; i < arr.length; i++){
        valorCarrinho.innerHTML = ""
        soma += arr[i].preco
    }
    valorCarrinho.innerText = `R$ ${soma},00`
    secaoCarrinho.appendChild(valorCarrinho)
}
somaProdutos(produtos)

filtroPesquisa.addEventListener("input", function filtrarPeloInput(event){
    let item = this.value
    let itemBusca = produtos.filter((prod) => 
        item === prod.nome || item === prod.nome.toLowerCase() || item === prod.nome.toUpperCase())
            listaProdutos.innerHTML = ""
            renderizarProduto(itemBusca)
            somaProdutos(itemBusca)
})

categoria.addEventListener("click", function filtrarSecao(event){
    let produtoCategoria = event.target
    let produtosNaTela = produtos.filter((prod) => {
        if(produtoCategoria.innerText == "Todos Produtos"){
            return prod
        } else if(prod.secao === produtoCategoria.innerText){
            return prod
        }
    }) 
    listaProdutos.innerHTML = ""
    renderizarProduto(produtosNaTela)
    somaProdutos(produtosNaTela)
})