import './index.scss';
import { useState, useEffect } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import * as filmes from '../../Api/filmes.js';

import CardFilme from '../../components/CardFilme';


export default function Filmes() {
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
        <div className='filmes'>
            <Header />

            <div className='filmes-container'>
                <h1>Filmes</h1>
                <div className='quadro'>
                    {listfilmes.map((filme) => (
                        <CardFilme key={filme.id} filme={filme} />
                    ))}
                </div>



            </div>

            <Footer />
        </div>
    );
}
