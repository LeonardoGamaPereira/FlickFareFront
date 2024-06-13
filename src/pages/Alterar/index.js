import './index.scss';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaAngleLeft } from 'react-icons/fa';
import Header from '../../components/header';
import Footer from '../../components/footer';
import * as filmes from '../../Api/filmes.js';

export default function Alterar() {
  const [nome, setNome] = useState("");
  const [genero, setGenero] = useState("");
  const [avaliacao, setAvaliacao] = useState("");
  const [lancamento, setLancamento] = useState("");
  const [imagem, setImagem] = useState("");
  const [img, setImg] = useState(null);
  const [filmesList, setFilmesList] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFilmes = async () => {
      try {
        const data = await filmes.getFilmes();
        setFilmesList(data);
      } catch (error) {
        console.error('Erro ao buscar filmes:', error);
      }
    };
    fetchFilmes();
  }, []);

  const handleAlterar = async () => {
    const formData = new FormData();
    formData.append('nome', nome);
    formData.append('genero', genero);
    formData.append('avaliacao', avaliacao);
    formData.append('lancamento', lancamento);
    if (img) {
      formData.append("imagem", img);
    }

    try {
      await filmes.atualizarFilme(selectedId, formData);
      alert("Filme alterado com sucesso!");
      navigate('/menu');
    } catch (error) {
      alert('Erro ao alterar filme');
      console.error(error.message);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImg(file);
      setImagem(URL.createObjectURL(file));
    }
  };

  const handleSelectFilme = (filme) => {
    setSelectedId(filme.id);
    setNome(filme.nome);
    setGenero(filme.genero);
    setAvaliacao(filme.avaliacao);
    setLancamento(filme.lancamento);
    setImagem(filme.imagem);
  };

  return (
    <div className='Alterar'>
      <Header />

      <div className='add-container1'>
        <Link to='/menu'><FaAngleLeft className='left-icon' /></Link>

        <div className='bloco2'>
          <p>Nome do Filme</p>
          <input 
            type='text'
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

          <p>Gênero</p>
          <input
            type='text'
            value={genero}
            onChange={(e) => setGenero(e.target.value)}
          />

          <p>Data de Lançamento</p>
          <input
            type='number'
            value={lancamento}
            onChange={(e) => setLancamento(e.target.value)}
          />

          <p>Imagem do Filme</p>

          <input
            type='file'
            accept='image/*'
            onChange={handleImageChange}
            style={{ display: 'none' }}
            id='upload-button'
          />
          <label htmlFor="upload-button" className="button">Alterar foto</label>

          <button type='button' onClick={handleAlterar}>Alterar</button>
        </div>

        <div className='filmes-list'>
          {filmesList.map((filme) => (
            <div key={filme.id} className='filme-item'>
              <p>{filme.nome}</p>
              <button onClick={() => handleSelectFilme(filme)}>Alterar</button>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
