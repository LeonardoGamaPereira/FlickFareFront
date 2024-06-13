import './index.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import logo from '../../assets/images/Design4.png';
import { buscarLogin } from '../../Api/login';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const login = { nomeUsuario: username, senha: password }; 
      const response = await buscarLogin(login);
      if (response) {
        setMessage('Login realizado com sucesso');
        setLoggedIn(true);
        setTimeout(() => {
          navigate('/');
        }, 2000);
      } else {
        setMessage('Credenciais inválidas');
      }
    } catch (error) {
      setMessage('Erro ao tentar logar');
    }
  };

  return (
    <div className='login'>
      <div className="login-container">
        <div className='logo'>
          <Link to='/'><img src={logo} alt="Logo" /></Link>
        </div>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <input 
              type="text" 
              placeholder='Usuário' 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
            />
            <FaUser className='icon' />
          </div>
          <div className="form-group">
            <input 
              type="password" 
              placeholder='Senha' 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
            <FaLock className='icon' />
          </div>
          <div className='recall-forget'>
            <label>
              <input type='checkbox' />
              Lembre de Mim
            </label>
          </div>
          <button type="submit">Login</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}
