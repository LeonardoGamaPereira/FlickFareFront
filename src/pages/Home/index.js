import './index.scss';
import { useState, useEffect } from 'react';
import qualquernome from '../../assets/images/Design4.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFireFlameCurved } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import * as filmes from '../../Api/filmes.js';
import CardFilme from '../../components/CardFilme';


function Home() {
  const [listfilmes, setListFilmes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchFilmes() {
      try {
        const info = await filmes.getFilmes();
        setListFilmes(info);
      } catch (error) {
        console.error('Erro ao buscar filmes:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchFilmes();
  }, []);



  return (
    <section>
      <div className="home">
        <header className="header">
          <div className='imagem'>
            <img src={qualquernome}></img>
          </div>
          <div className='buscar'>
            <p className='inicial'>FlickFare – Onde a paixão pelo cinema ganha vida.</p>
          </div>
          <div className='links'>
            <Link to='/login'>Login</Link>
            <Link to='/menu'>Menu</Link>
          </div>
        </header>

      </div>

      <div className='secao2'>
        <div>
          <div className='container-home'>
            <FontAwesomeIcon icon={faFireFlameCurved} className='fogo' />

            <h2>Filmes Adicionados</h2>

          </div>

          <div className='container1'>
            <Link to='/pagefilmes'>Ver Mais</Link>
            <Link>
              <FontAwesomeIcon icon={faPlus} className='fogo' />
            </Link>
          </div>
        </div>
        <div className='filmes-container-home'>
        {listfilmes.map((filme) => (
          <CardFilme key={filme.id} filme={filme} />
        ))}
        </div>
      </div>



      <footer className='footer'>
        <div className='footer-links'>
          <Link to='/sobre'>Sobre</Link>
          <Link to='/pagefilmes'>Filmes</Link>
        </div>
        <div className='img-footer'>
          <img src={qualquernome} alt='Logo' />
        </div>
      </footer>

    </section>
  );
}

export default Home;
