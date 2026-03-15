# 👟 Dynamic Sneakers Showcase

Este repositório apresenta uma vitrine de e-commerce dinâmica, desenvolvida para demonstrar habilidades avançadas em manipulação de DOM e lógica escalável com JavaScript Vanilla. O projeto simula uma demanda real de ticket técnico, onde o desafio era criar componentes de produtos totalmente interativos e independentes.

## 🚀 Funcionalidades Principais

* **Arquitetura de Fábrica (Logic Factory):** Implementação de uma lógica centralizada que instancia o comportamento individual para cada card na página, garantindo que estados como quantidade e tamanho não se sobreponham entre os produtos.
* **Carrossel de Imagens Integrado:** Cada produto possui um sistema de navegação por *dots* independente, permitindo visualizar diferentes ângulos do calçado sem recarregar a página.
* **Cálculo Dinâmico de Preço:** O sistema extrai o preço base diretamente do HTML, realiza o tratamento da string para operações matemáticas e atualiza o subtotal em tempo real conforme a quantidade selecionada.
* **Gestão de Estados de Interface:** Controle reativo de classes CSS para indicar o tamanho selecionado e validações de fluxo (como impedir a compra sem a escolha do tamanho).
* **Modal de Checkout Global:** Utilização de um único modal no DOM que é alimentado dinamicamente com as informações específicas do card de origem, otimizando a performance.

## 🛠️ Tecnologias e Técnicas de Engenharia

* **HTML5 & CSS3:** Uso de semântica, Flexbox, CSS Grid para layouts complexos e `@keyframes` para animações fluidas.
* **JavaScript (ES6+):**
    * Uso de `querySelectorAll` e `forEach` para iteração de componentes.
    * Tratamento de dados com `parseFloat` e `toLocaleString('pt-BR')`.
    * Gestão de eventos com `addEventListener`.
* **Clean Code:**
    * Funções com responsabilidade única.
    * Nomenclatura semântica para variáveis e classes.
    * Código modular e de fácil manutenção.
* **Design Responsivo:** Interface totalmente adaptável, com ajustes específicos para dispositivos móveis (telas abaixo de 400px).

## 🎨 Como visualizar

1.  Clone o repositório.
2.  Abra o arquivo `index.html` em seu navegador.
3.  Explore a interatividade de cada card de forma independente.

---
Desenvolvido por **Yasmin Souza** como parte de um portfólio focado em desenvolvimento Front-End profissional.
