const api = {
    urlBase: 'http://localhost:3000/pensamentos',

    async buscarPensamentos() {
        try {
            const response = await fetch(this.urlBase);
            return await response.json();
        } catch (error) {
            alert(`Erro ao buscar pensamentos: ${error}`);
            throw error;
        }
    },

    async salvarPensamento(pensamento) {
        try {
            const response = await fetch(this.urlBase, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(pensamento)
            });
            return await response.json();
        } catch (error) {
            alert(`Erro ao salvar pensamento: ${error}`);
            throw error;
        }
    },

    async buscarPensamentoPorId(id) {
        try {
            const response = await fetch(`${this.urlBase}/${id}`);
            return await response.json();
        } catch (error) {
            alert(`Erro ao buscar pensamento: ${error}`);
            throw error;
        }
    },

    async editarPensamento(pensamento) {
        try {
            const response = await fetch(`${this.urlBase}/${pensamento.id}`, {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(pensamento)
            });
            return await response.json();
        } catch (error) {
            alert(`Erro ao editar pensamento: ${error}`);
            throw error;
        }
    },

    async excluirPensamento(pensamento) {
        try {
            await fetch(`${this.urlBase}/${pensamento.id}`, {
                method: 'DELETE',
            });
        } catch (error) {
            alert(`Erro ao excluir pensamento: ${error}`);
            throw error;
        }
    }
}

export default api;