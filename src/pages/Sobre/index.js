import './index.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/Design4.png'
import img1 from '../../assets/images/walle-header.jpg'
import img2 from '../../assets/images/ORegresso.jpg'
import img3 from '../../assets/images/popcorn.jpg'
import Header from '../../components/header';
import Footer from '../../components/footer';


export default function Sobre() {
    return (
        <div className='Sobre'>
            <Header/>
            <div className='sobre-container'>
                <h2>Sobre</h2>

                <p>Bem-vindo ao Flickfare, sua plataforma definitiva para explorar,
                    <br /> descobrir e desfrutar dos melhores filmes de todos os tempos.
                    <br />Fundada por amantes do cinema,
                    <br />nossa missão é proporcionar uma experiência cinematográfica única para todos,
                    <br /> desde os cinéfilos mais dedicados até os espectadores casuais.</p>

                <div className='imagem'>
                    <img src={img1} ></img>
                </div>


                <h2>Nossa Missão</h2>

                <p>No Flickfare, acreditamos no poder transformador do cinema.
                    <br />Os filmes têm a capacidade de nos levar a novos mundos,
                    <br />provocar emoções profundas e nos conectar através de histórias universais.
                    <br />Nossa missão é tornar essas experiências acessíveis a todos,
                    <br />oferecendo uma plataforma onde você pode descobrir novos filmes,
                    <br />revisitar clássicos e compartilhar suas opiniões com uma comunidade vibrante de amantes do cinema.</p>

                <div className='imagem'>
                    <img src={img2}></img>
                </div>

                <h2>Junte-se a Nós</h2>

                <p>Seja você um fã de filmes de ação explosivos,
                    <br />dramas emocionantes, comédias hilariantes ou documentários instigantes,
                    <br />o Flickfare é o lugar certo para você.
                    <br />Junte-se a nós e comece sua jornada cinematográfica hoje mesmo!</p>

                <div className='imagem'>
                    <img src={img3}></img>
                </div>

                <h3>FlickFare – Onde a paixão pelo cinema ganha vida.</h3>
            </div>

                <Footer/>
            

        </div>
    );
}