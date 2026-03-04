const api = {
    urlBase: 'http://localhost:3000/pensamentos',

    async buscarPensamentos() {
        try {
            const response = await axios.get(this.urlBase);
            return response.data;
        } catch (error) {
            alert(`Erro ao buscar pensamentos: ${error}`);
            throw error;
        }
    },

    async salvarPensamento(pensamento) {
        try {
            const response = await axios.post(this.urlBase, pensamento);
            return response.data;
        } catch (error) {
            alert(`Erro ao salvar pensamento: ${error}`);
            throw error;
        }
    },

    async buscarPensamentoPorId(id) {
        try {
            const response = await axios.get(`${this.urlBase}/${id}`);
            return response.data;
        } catch (error) {
            alert(`Erro ao buscar pensamento: ${error}`);
            throw error;
        }
    },

    async editarPensamento(pensamento) {
        try {
            const response = await axios.put(`${this.urlBase}/${pensamento.id}`, pensamento);
            return response.data;
        } catch (error) {
            alert(`Erro ao editar pensamento: ${error}`);
            throw error;
        }
    },

    async excluirPensamento(pensamento) {
        try {
            await axios.delete(`${this.urlBase}/${pensamento.id}`);
        } catch (error) {
            alert(`Erro ao excluir pensamento: ${error}`);
            throw error;
        }
    }
}

export default api;