import ui from "./ui.js";

document.addEventListener('DOMContentLoaded', () => {
    ui.renderizarPensamentos();

    const formPensamento = document.getElementById('pensamento-form');
    formPensamento.addEventListener('submit', event => formSubmit(event));

    const cancelarBtn = document.getElementById('botao-cancelar');
    cancelarBtn.addEventListener('click', () => {formPensamento.reset()});
});

async function formSubmit(event) {
    event.preventDefault();
    const conteudo = document.getElementById('pensamento-conteudo').value;
    const autoria = document.getElementById('pensamento-autoria').value;
     try {
        await ui.adicionarPensamento({ conteudo, autoria });
        ui.renderizarPensamentos();
        conteudo.value = '';
        autoria.value = '';
    } catch (error) {
        console.error('Erro ao enviar pensamento:', error);
    }
}