
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/Design4.png'; 
import Styles from '../components/header.module.scss' 

const Header = () => {
  return (
    <div className={Styles.header}>
      <header>
        <Link to='/'><img src={logo} alt="Logo"></img></Link>
      </header>
    </div>
  );
};

export default Header;
