import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Sobre from './pages/Sobre';
import Filmes from './pages/Filmes';
import Menu from './pages/Menu';
import Adicionar from './pages/Adicionar';
import Alterar from './pages/Alterar';
import VerFilmes from './pages/VerFilmes';



export default function Navegacao() {
    return (
        <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sobre' element={<Sobre />} />
        <Route path='/pagefilmes' element={<Filmes />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/adicionar' element={<Adicionar />} />
        <Route path='/alterar' element={<Alterar />} />
        <Route path='/verfilmes' element={<VerFilmes />} />
        </Routes>
        
        </BrowserRouter>

    );
}