import axios from 'axios';
import { mensagemError } from './mensagemError';

export async function buscarLogin(login) {
    try {
        const response = await axios.post(`http://localhost:3000/login`, login);
        console.log(response.data);
        return response.data;
    } catch (error) {
        mensagemError(error, 'Erro ao buscar login');
        throw error;
    }
}
