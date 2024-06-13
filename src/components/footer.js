import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/Design4.png'; 
import '../../src/components/footer.scss'; 

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-links'>
        <Link to='/sobre'>Sobre</Link>
        <Link to='/pagefilmes'>Filmes</Link>
      </div>
      <div className='img-footer'>
        <Link to='/'> <img src={logo} alt='Logo' /></Link>
      </div>
    </footer>
  );
};

export default Footer;
