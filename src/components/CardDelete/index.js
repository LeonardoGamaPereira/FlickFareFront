import './index.scss';
import {API_URL} from '../../Api/apiurl';
import { FaTrashCan } from 'react-icons/fa6';
import * as filmes from '../../Api/filmes.js';




export default function CardDelete({filme}) {
    async function removeFilme() {
        try {
          await filmes.excluirFilme(filme.id);
          alert('Filme Removido')
        } catch (error) {
          console.error('Erro ao remover o filme:', error);
        }
      }
    const imgSrc = `${API_URL}/${filme.imagem}`;
    return (
        <div className='container-filme'>
            <h2>{filme.nome}</h2>
            <img src={imgSrc}></img>
            <p>{filme.genero}</p>
            <div>
            <p>{filme.lancamento}</p>
            <FaTrashCan  onClick={removeFilme}/>
            </div>

        </div>
    );
}