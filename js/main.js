import api from "./api.js";
import ui from "./ui.js";

// make ui available to inline handlers (since we're using modules)
window.ui = ui;

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
    const id = document.getElementById('pensamento-id').value;
     try {
        id ? await api.editarPensamento({ id, conteudo, autoria }) : await ui.adicionarPensamento({ conteudo, autoria });;
        ui.renderizarPensamentos();
        conteudo.value = '';
        autoria.value = '';
    } catch (error) {
        console.error('Erro ao enviar pensamento:', error);
    }
}