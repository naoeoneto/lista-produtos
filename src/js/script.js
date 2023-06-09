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
botaoCategoria04.classList.add("estiloGeralBotoes--filter--lat")
filtro.classList.add("containerBuscaPorNome")
filtroPesquisa.classList.add("campoBuscaPorNome")
filtroBotao.classList.add("estiloGeralBotoes--botaoBuscaPorNome")
secaoProdutos.classList.add("containerVitrine")
divProdutos.classList.add("containerListaProdutos")
categoria.id = "botoesContainer"
nomeLoja.innerText = "Shop Now"
botaoCategoria01.innerText = "Todos Produtos"
botaoCategoria02.innerText = "Hortifruti"
botaoCategoria03.innerText = "Panificadora"
botaoCategoria04.innerText = "Laticínios"
imagemBotao.src = "./src/img/search.png"
imagemBotao.alt = "lupa"
filtroPesquisa.type = "text"
filtroPesquisa.placeholder = "Pesquisar por"

bodyLoja.append(headerLoja, mainLoja)
headerLoja.appendChild(nomeLoja)
mainLoja.append(secaoCategoria, secaoCarrinho, secaoProdutos)
secaoCategoria.append(categoria, filtro)
categoria.append(botaoCategoria01, botaoCategoria02, botaoCategoria03, botaoCategoria04)
filtro.append(filtroPesquisa, filtroBotao)
filtroBotao.appendChild(imagemBotao)
secaoProdutos.appendChild(divProdutos)
divProdutos.appendChild(listaProdutos)

function renderizarProduto(arr){
for(let i = 0; i < arr.length; i++){
    let cardProduto = document.createElement("li")
    let divImg = document.createElement("div")
    let imagemProduto = document.createElement("img")
    let divInfo = document.createElement("div")
    let nomeProduto = document.createElement("h3")
    let tipoProduto = document.createElement("span")
    let divPreco = document.createElement("div")
    let precoProduto = document.createElement("p")
    let botaoProduto = document.createElement("button")

    imagemProduto.src = `${arr[i].img}`
    imagemProduto.alt = `Imagem ${arr[i].nome}`
    nomeProduto.innerText = `${arr[i].nome}`
    tipoProduto.innerText = `${arr[i].secao}`
    precoProduto.innerText = `R$ ${arr[i].preco}`
    botaoProduto.innerText = "Adicionar ao carrinho"
    botaoProduto.id = `${arr[i].id}`
    // cardProduto.classList.add("card")
    divImg.classList.add("card-imagem")
    divInfo.classList.add("card-info")
    divPreco.classList.add("card-preco")

    listaProdutos.appendChild(cardProduto)
    cardProduto.append(divImg, divInfo, divPreco)
    divImg.appendChild(imagemProduto)
    divInfo.append(nomeProduto, tipoProduto, listarNutrientes(arr[i].componentes))
    divPreco.append(precoProduto, botaoProduto)
    }
}
renderizarProduto(produtos)

let asideLoja = document.createElement("aside")
secaoProdutos.appendChild(asideLoja)

let barraTitulo = document.createElement("section")
let imgTitulo = document.createElement("img")
let carTitulo = document.createElement("h5");
let sectionCar = document.createElement("section");
let carMain = document.createElement("main");
let carImg = document.createElement("img");
let tagCarAdd = document.createElement("p");

barraTitulo.classList.add("carrinho-titulo")
imgTitulo.classList.add("carrinho-img")
carTitulo.classList.add("carrinho-texto");
sectionCar.classList.add("carrinho");
carMain.classList.add("carrinho-lista");
carImg.classList.add("carrinho-sacola")
tagCarAdd.classList.add("subtitulo");
carTitulo.innerText = "Seu Carrinho"
tagCarAdd.innerText = "Que tal fazer umas comprinhas?"
imgTitulo.src ="./src/img/shopping-cart.png"
carImg.src = "./src/img/shopping-bag.png"

asideLoja.append(barraTitulo, sectionCar)
barraTitulo.append(imgTitulo, carTitulo)
sectionCar.appendChild(carMain)
carMain.append(carImg, tagCarAdd)

function listarNutrientes(arr){ 
    let listaNutri = document.createElement("ol")
    arr.forEach((elem) => {
        let nutriItem = document.createElement("li")
        nutriItem.innerText = `${elem}`
        listaNutri.appendChild(nutriItem)
    })
    return listaNutri
}

filtroPesquisa.addEventListener("input", function filtrarPeloInput(event){
    let item = this.value
    let itemBusca = produtos.filter((elem) => 
        elem.nome.toLowerCase().includes(item.toLowerCase()) || elem.nome.toLowerCase().includes(item.toLowerCase()) || elem.nome.toLowerCase().includes(item.toLowerCase()))
            listaProdutos.innerHTML = ""
            renderizarProduto(itemBusca)
            // somaProdutos(itemBusca)
})

categoria.addEventListener("click", function filtrarSecao(event){
    let produtoCategoria = event.target
    let produtosNaTela = produtos.filter((elem) => {
        if(produtoCategoria.innerText == "Todos Produtos" || elem.secao === produtoCategoria.innerText){
            return elem
        }
    }) 
    listaProdutos.innerHTML = ""
    renderizarProduto(produtosNaTela)
    // somaProdutos(produtosNaTela)
});

listaProdutos.addEventListener("click", function selecionarProduto(event){
    let prodCarrinho = event.target
    if(prodCarrinho.tagName == "BUTTON"){
        let produtoLoja = produtos.find(elem => elem.id == prodCarrinho.id)
        if(carrinhoCompras.length < 1){
            carMain.innerHTML = ""
            addCarrinho(produtoLoja)
            somaProdutos(carrinhoCompras)
        } else {
            addCarrinho(produtoLoja)
            somaProdutos(carrinhoCompras)
        }
    }
});

function addCarrinho(elem){
    carrinhoCompras.push(elem)
    renderizarProdutoCarrinho(elem)
}

function renderizarProdutoCarrinho(elem){
    let carMain = document.querySelector(".carrinho-lista")
    let liCarrinho = document.createElement("li")
    let divCarrinho = document.createElement("div")
    let imgCarrinho = document.createElement("img")
    let nomeCarrinho = document.createElement("h4")
    let secaoCarrinho = document.createElement("p")
    let precoCarrinho = document.createElement("strong")
    let removerCarrinho = document.createElement("button")

    liCarrinho.classList.add("item-prod-carrinho")
    divCarrinho.classList.add("div-prod-carrinho")
    imgCarrinho.classList.add("img-prod-carrinho")
    nomeCarrinho.classList.add("nome-prod-carrinho")
    secaoCarrinho.classList.add("secao-prod-carrinho")
    precoCarrinho.classList.add("preco-prod-carrinho")
    removerCarrinho.classList.add("remover-prod-carrinho")
    imgCarrinho.src = `${elem.img}`
    nomeCarrinho.innerText = `${elem.nome}`
    secaoCarrinho.innerText= `${elem.secao}`
    precoCarrinho.innerText = `R$ ${elem.preco}`
    removerCarrinho.innerText = "X"

    carMain.appendChild(liCarrinho)
    liCarrinho.append(imgCarrinho, divCarrinho, removerCarrinho)
    divCarrinho.append(nomeCarrinho, secaoCarrinho, precoCarrinho)
}

let carrinhoCompras = [];

let barraInfo = document.createElement("div");
let infoQtde = document.createElement("span")
let infoNumero = document.createElement("span")
let barraTotal = document.createElement("div")
let totalTexto = document.createElement("span")
let totalValor = document.createElement("span")

barraInfo.classList.add("carrinho-quantidade")
barraTotal.classList.add("carrinho-total")
infoQtde.innerText = "Quantidade"
totalTexto.innerText = "Total"

asideLoja.append(barraInfo, barraTotal)
barraInfo.append(infoQtde, infoNumero)
barraTotal.append(totalTexto, totalValor)

function somaProdutos(arr){
    let soma = 0
    for(let i = 0; i < arr.length; i++){
        soma += parseInt(arr[i].preco)
    }
    
    infoNumero.innerText = `${arr.length}`
    totalValor.innerText = `R$ ${soma},00`
}
somaProdutos(carrinhoCompras)