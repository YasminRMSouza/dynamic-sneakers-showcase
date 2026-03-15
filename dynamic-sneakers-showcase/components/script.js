// ==============================================
//       MODAL GLOBAL (Único para a página)
// ==============================================

const modalOverlay = document.getElementById('successModal');
const modalMessage = document.getElementById('modalText');
const buyNowModalBtn = document.getElementById('buyNowModalBtn');
const addToCartModalBtn = document.getElementById('addToCartModalBtn');

// 1- Ação do botão 'Comprar agora' via Modal
buyNowModalBtn.addEventListener('click', () => {
  document.querySelector('.modal-title').innerText =  '⏳ Processando...';
  modalText.innerHTML =  'Redirecionando você para a tela de pagamento seguro. Aguarde um instante.';
  document.querySelector('.modal-actions').style.display='none';

  setTimeout(() => {
    modalOverlay.classList.remove('active');

    // Reseta o modal para o estado original caso seja aberto novamente
    document.querySelector('.modal-title').innerText = '🎉 Sucesso!';
    document.querySelector('.modal-actions').style.display = 'flex';
  }, 2000);
});

// 2- Ação do botão 'Adicionar ao carrinho' via modal
addToCartModalBtn.addEventListener('click', () => {
  modalOverlay.classList.remove('active'); // apenas fecha o modal
});

// Fechar ao clicar fora da caixa do Modal
modalOverlay.addEventListener('click', (evento) => {
  if (evento.target === modalOverlay) {
    modalOverlay.classList.remove('active');
  }
});

// ===============================================
//       FÁBRICA DE CARDS (Lógica isolada)
// ===============================================

// Selecionar todos os cards da página
const todosOsCards = document.querySelectorAll('.product-card');

// O forEach vai aplicar toda a lógica abaixo para CADA card, individualmente
todosOsCards.forEach((card) => {

  //----------------------------------------
  //   LÓGICA DO CARROSSEL PARA CADA CARD
  //----------------------------------------

  // Usar o card.querySlector para pegar apenas o trilho e os pontos DENTRO de cada card
  const track = card.querySelector('.carousel-track');
  const dots = card.querySelectorAll('.dot');
  let currentIndex = 0;

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentIndex = index;
      track.style.transform = `translateX(-${currentIndex * 100}%)`;

      // Remove a classe active do ponto antigo deste card e adiciona no novo
      card.querySelector('.dot.active').classList.remove('active');
      dot.classList.add('active');
    });
  });

  //--------------------------------------------------
  //   ESTADO E SELETORES DO PRODUTO PARA CADA CARD
  //--------------------------------------------------
  let quantidadeProduto = 1;
  let tamanhoSelecionado = null;

  const displayPreco = card.querySelector('.card-price');
  const displayQuantidade = card.querySelector('.quantity-display');
  const botoesQuantidade = card.querySelectorAll('.quantity-btn');
  const btnMenos = botoesQuantidade[0];
  const btnMais = botoesQuantidade[1];
  const botoesTamanho = card.querySelectorAll('.size-btn');
  const btnComprar = card.querySelector('.add-to-cart-btn');

  // TRUQUE DE MESTRE: Lendo o preço dinâmico do HTML
  const textoDoPrecoHtml = displayPreco.innerText; // Ex.: "R$ 799,99"

  // O comando replace tiro o "R$" e troca a vírgula por ponto para o JS conseguir calcular
  const precoBaseStr = textoDoPrecoHtml.replace('R$', '').trim().replace(',', '.');
  const precoBase = parseFloat(precoBaseStr); // Transforma o texto "799.99" no número 799.99

  //--------------------------------------------------
  //   LÓGICA DE SELEÇÃO DE TAMANHO PARA CADA CARD
  //--------------------------------------------------
  botoesTamanho.forEach(botao => {
    botao.addEventListener('click', () => {
      botoesTamanho.forEach(b => b.classList.remove('active'));
      botao.classList.add('active');
      tamanhoSelecionado = botao.innerText
    });
  });


  //--------------------------------------------------
  //   LÓGICA DE QUANTIDADE E PREÇO PARA CADA CARD
  //--------------------------------------------------
  function atualizarTela() {
    displayQuantidade.innerText = quantidadeProduto;
    const total = precoBase * quantidadeProduto;
    displayPreco.innerText = total.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
  }

  btnMais.addEventListener('click', () => {
    quantidadeProduto++;
    atualizarTela();
  });

  btnMenos.addEventListener('click', () => {
    if (quantidadeProduto > 1) {
      quantidadeProduto--;
      atualizarTela();
    }
  });

  //--------------------------------------------------
  //   AÇÃO FINAL (BOTÃO DE COMPRA) PARA CADA CARD
  //--------------------------------------------------
  btnComprar.addEventListener('click', () => {

    // Validação
    if (!tamanhoSelecionado) {
      alert('Por favor, selecione um tamanho antes de adicionar ao carrinho');
      return;
    }

    const totalFinal = precoBase * quantidadeProduto;
    const totalFormatado = totalFinal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});

    // Injeta a mensagem no modal com as informações específicas para cada CARD
    modalText.innerHTML = `Você adicionou <strong>${quantidadeProduto} tênis tamanho ${tamanhoSelecionado}</strong> ao carrinho. <br><br>Total: <strong>${totalFormatado}</strong>`;
    
    // Abre o modal
    modalOverlay.classList.add('active');
  });
});