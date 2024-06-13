import axios from "axios";
const API_URL = 'http://localhost:3000'; 


export async function getFilmes() {
    try {
        const response = await fetch(`${API_URL}/filmes`);
        if (!response.ok) {
            throw new Error('Erro ao buscar filmes');
        }
        const data = await response.json();
        console.log('Filmes:', data);
        return data;
    } catch (error) {
        console.error('Erro:', error);
    }
}

// Função para buscar um filme por ID
export async function getFilmeById(id) {
    try {
        const response = await fetch(`${API_URL}/filmes/${id}`);
        if (!response.ok) {
            throw new Error('Filme não encontrado');
        }
        const filme = await response.json();
        console.log('Filme encontrado:', filme);
        return filme;
    } catch (error) {
        console.error('Erro:', error);
    }
}

// Função para adicionar um novo filme
export async function adicionarFilme(filmeData) {
    let url = API_URL + '/filmes';

    let r = await axios.post(url, filmeData);
    return r.data;
}

// Função para atualizar um filme por ID
export async function atualizarFilme(id, filmeData) {
    try {
        const response = await fetch(`${API_URL}/filmes/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(filmeData),
        });
        if (!response.ok) {
            throw new Error('Erro ao atualizar filme');
        }
        const filmeAtualizado = await response.json();
        console.log('Filme atualizado:', filmeAtualizado);
        return filmeAtualizado;
    } catch (error) {
        console.error('Erro:', error);
    }
}

// Função para excluir um filme por ID
export async function excluirFilme(id) {
    try {
        const response = await fetch(`${API_URL}/filmes/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Erro ao excluir filme');
        }
        const data = await response.json();
        console.log('Filme excluído com sucesso:', data);
        return data;
    } catch (error) {
        console.error('Erro:', error);
    }
}

