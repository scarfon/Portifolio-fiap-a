let inputQtde = document.querySelector("#qtde")
let inputJS = document.querySelector("#js")
let inputLayout = document.querySelector("#layout-sim")
let inputLayoutNao = document.querySelector("#layout-nao")
let inputPrazo = document.querySelector("#prazo")


inputQtde.addEventListener("change", atualizarPreco)
inputJS.addEventListener("change", atualizarPreco)
inputLayout.addEventListener("change", atualizarPreco)
inputLayoutNao.addEventListener("change", atualizarPreco)
inputPrazo.addEventListener("change", atualizarPreco)

function atualizarPreco() {
    let preco = inputQtde.value * 100
    let js = inputJS.checked
    let layout = inputLayout.checked
    let prazo = inputPrazo.value

    let labelPrazo = document.querySelector("label[for=prazo]")
    labelPrazo.innerHTML = `Prazo: ${prazo} semanas`

    if (js) preco *= 1.1
    if (layout) preco += inputQtde.value * 30
    let taxaUrgencia = 1 - prazo * 0.05
    preco *= 1 + taxaUrgencia
    

    document.querySelector("#preco").innerHTML = "R$ " + preco.toFixed(2)
}

