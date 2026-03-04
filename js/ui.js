import api from './api.js';

const ui = {
    async renderizarPensamentos() {
        const listaPensamentos = document.getElementById('lista-pensamentos');

        try {
            const pensamentos = await api.buscarPensamentos();
            pensamentos.forEach(pensamento => {
                listaPensamentos.innerHTML += `
                    <li class="li-pensamento" data-id="${pensamento.id}">
                        <img src="assets/imagens/aspas-azuis.png" alt="Aspas azuis" class="icone-aspas">
                        <div class="pensamento-conteudo">${pensamento.conteudo}</div>
                        <div class="pensamento-autoria">${pensamento.autoria}</div>
                        <button class="botao-editar" onclick="ui.preencherFormularioEdicao('${pensamento.id}')">
                            <img src="assets/imagens/icone-editar.png" alt="Editar pensamento">
                        </button>
                    </li>
                    `;
            });
        } catch (error) {
            console.error('Erro ao renderizar pensamentos:', error);
        }
    },

    async adicionarPensamento(pensamento) {
        try {
            const pensamentoSalvo = await api.salvarPensamento(pensamento);
            this.renderizarPensamentos();
        } catch (error) {
            console.error('Erro ao adicionar pensamento:', error);
        }
    },

    async preencherFormularioEdicao(id) {
        try {
            const pensamento = await api.buscarPensamentoPorId(id);
            console.log(pensamento);
            document.getElementById('pensamento-conteudo').value = pensamento.conteudo;
            document.getElementById('pensamento-autoria').value = pensamento.autoria;
            document.getElementById('pensamento-id').value = pensamento.id;
        } catch (error) {
            console.error('Erro ao preencher formulário de edição:', error);
        }
    }   
}

export default ui;