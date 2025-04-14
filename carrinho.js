function botaoDeletar(id) {
  let produto = document.getElementById(id);
  if (produto) {
    produto.remove();
    atualizarSubtotal();
  }
}

function aumentar(botao) {
  let item = botao.parentElement;
  let quantidadeElemento = item.querySelector(".quantidade");
  let valorAtual = parseInt(quantidadeElemento.innerText);

  let produto = botao.closest(".produto");
  let precoProdutoElemento = produto.querySelector(".preco_Produto");
  let precoTotalElemento = produto.querySelector(".preco_Total");

  let preco = parseFloat(precoProdutoElemento.innerText.replace(",", "."));

  if (valorAtual >= 1) {
    let novaQuantidade = valorAtual + 1;
    quantidadeElemento.innerText = novaQuantidade;

    let novoPrecoTotal = preco * novaQuantidade;
    precoTotalElemento.innerText = novoPrecoTotal.toFixed(2).replace(".", ",");
  }

  atualizarSubtotal();
}

function diminuir(botao) {
  let item = botao.parentElement;
  let quantidadeElemento = item.querySelector(".quantidade");
  let valorAtual = parseInt(quantidadeElemento.innerText);

  let produto = botao.closest(".produto");
  let precoProdutoElemento = produto.querySelector(".preco_Produto");
  let precoTotalElemento = produto.querySelector(".preco_Total");

  let preco = parseFloat(precoProdutoElemento.innerText.replace(",", "."));

  if (valorAtual > 1) {
    let novaQuantidade = valorAtual - 1;
    quantidadeElemento.innerText = novaQuantidade;

    let novoPrecoTotal = preco * novaQuantidade;
    precoTotalElemento.innerText = novoPrecoTotal.toFixed(2).replace(".", ",");
  }

  atualizarSubtotal();
}

function atualizarSubtotal() {
  let total = 0;
  let produtos = document.querySelectorAll(".produto");

  produtos.forEach((produto) => {
    let quantidade = parseInt(produto.querySelector(".quantidade").innerText);
    let preco = parseFloat(
      produto.querySelector(".preco_Produto").innerText.replace(",", ".")
    );
    let totalProduto = quantidade * preco;

    total += totalProduto;
  });

  let subtotalElemento = document.querySelector("footer .total h5:last-child");
  if (subtotalElemento) {
    subtotalElemento.innerText = `R$ ${total.toFixed(2).replace(".", ",")}`;
  }

  let contador = document.getElementById("quantidade-item");
  if (contador) {
    contador.innerText = `${produtos.length} ${
      produtos.length === 1 ? "item" : "itens"
    }`;
  }
}
