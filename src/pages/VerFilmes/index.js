import './index.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from '../../assets/images/Design4.png';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { FaAngleLeft } from 'react-icons/fa';
import * as filmes from '../../Api/filmes.js';
import CardDelete from '../../components/CardDelete';


export default function VerFilmes() {
    const [listfilmes, setListFilmes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

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


    if (loading) {
        return <p>Carregando...</p>;
    }

    if (error) {
        return <p>Erro ao carregar filmes. Por favor, tente novamente mais tarde.</p>;
    }
    return (
        <div className='VerFilmes'>
            <Header />

            <div className='add-container1'>
                <Link to='/menu'><FaAngleLeft className='left-icon' /></Link>
            </div>

            <div className='corpo'>
                <h1>Filmes</h1>
                <div>
                    {listfilmes.map((filme) => (
                        <CardDelete key={filme.id} filme={filme} />
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
}
