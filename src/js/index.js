/* 
    Objetivo 1 - Quando o usuáerio clicar em "mais projetos" deve abrir os projetos que estão escondidos no HTML

        passo1 - Pegar o botão "Mais projetos" no JS para poder verificar quando o usuário clicar em cima dele

        passo2 - Identificar o clique do botão

        passo3 - Adicionar a classe ativo para os projetos escondidos

    Objetivo 2 - Esconder o botão de mostrar mais

        passo1 - Pegar o o botão e esconder ele
*/

// Objetivo 1 - Quando o usuáerio clicar em "mais projetos" deve abrir os projetos que estão escondidos no HTML

//         passo1 - Pegar o botão "Mais projetos" no JS para poder verificar quando o usuário clicar em cima dele

const BotaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');

const ProjetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

console.log(ProjetosInativos)

// passo2 - Identificar o clique do botão

BotaoMostrarProjetos.addEventListener('click', () => {
    // passo3 - Adicionar a classe ativo para os projetos escondidos

    MostrarMaisProjetos();
    // Objetivo 2 - Esconder o botão de mostrar mais

    // passo1 - Pegar o o botão e esconder ele

    EsconderBotao();

})

function EsconderBotao() {
    BotaoMostrarProjetos.classList.add('remover');
}

function MostrarMaisProjetos() {
    ProjetosInativos.forEach(ProjetoInativo => {
        // console.log(ProjetoInativo)
        ProjetoInativo.classList.add('ativo');
    });
}

