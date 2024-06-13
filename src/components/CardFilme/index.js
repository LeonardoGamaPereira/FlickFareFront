import './index.scss';
import {API_URL} from '../../Api/apiurl';




export default function CardFilme({filme}) {
    const imgSrc = `${API_URL}/${filme.imagem}`;
    return (
        <div className='container-filme1'>
            <h2>{filme.nome}</h2>
            <img src={imgSrc}></img>
            <p>{filme.genero}</p>
            <p>{filme.lancamento}</p>

        </div>
    );
}