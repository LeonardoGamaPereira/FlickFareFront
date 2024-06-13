import './index.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import logo from '../../assets/images/Design4.png'
import Header from '../../components/header';
import Footer from '../../components/footer';


export default function Menu(){
    return (
        <div className='menu'>
            <Header/>

            <div className='container'>
                <form className='form-container'>
                    <h1>Menu</h1>
                    <div>
                   <Link className='retangulomenu' to='/adicionar' >
                   <p className='botao'> Adicionar Filme</p>
                   </Link>
                   </div>
                   <div>
                   <Link className='retangulomenu' to='/alterar'>
                   <p className='botao'>Alterar Filme</p>
                   </Link>
                   </div>

                   <div>
                    <Link className='retangulomenu' to='/verfilmes'>
                    <p className='botao'>Ver Filmes</p>
                    </Link>
                   </div>

                </form>

            </div>

            <Footer/>

        </div>
    );
}