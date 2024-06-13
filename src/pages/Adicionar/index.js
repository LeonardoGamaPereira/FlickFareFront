import '../Adicionar/index.scss';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaAngleLeft } from 'react-icons/fa';
import Header from '../../components/header';
import Footer from '../../components/footer';
import * as filmes from '../../Api/filmes.js';

export default function Adicionar() {
  const [nome, setNome] = useState("");
  const [genero, setGenero] = useState("");
  const [lancamento, setLancamento] = useState("");
  const [imagem, setImagem] = useState("");
  const [img, setImg] = useState(null);

  const navigate = useNavigate(); // Move useNavigate para fora de adicionarFilme

  async function adicionarFilme() {
    const formData = new FormData();
    formData.append('nome', nome);
    formData.append('genero', genero);
    formData.append('lancamento', lancamento);
    formData.append('imagem', imagem);
    if (img) {
      formData.append("imagem", img)
    }

    try {
      // Chama adicionarFilme da API de filmes
      if(nome !== "" && genero  !== "" && lancamento !== "" && imagem !== "") {
        let info = await filmes.adicionarFilme(formData);
        alert("Filme adicionado!");
      }

      navigate('/menu');
    } catch (error) {
      alert('Erro ao adicionar filme');
      console.error(error.message);
    }
  }

  function handleImageChange(e) {
    const file = e.target.files[0];
    if (file) {
      setImg(file);
      setImagem(URL.createObjectURL(file));
    }
  }
   
  return (
    <div className='Adicionar'>
      <Header />

      <div className='add-container'>
        <Link to='/menu'><FaAngleLeft className='left-icon' /></Link>

        <div className='bloco1'>

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
            style={{display: 'none'}}
            id='upload-button'
          />
          <label htmlFor="upload-button" className="button">Adicionar foto</label>

          <button type='button' onClick={adicionarFilme}>Adicionar</button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
