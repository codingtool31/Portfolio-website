


import './Navbar.css';
import { useState } from 'react';
import logo2 from '../assets/logo2.png';

const Navbar = () => {
  const [active, setActive] = useState(''); 

  const handleClick = (menu) => {
    setActive(menu);  
  };

  return (
    <div className="navbar">
      <img src={logo2} alt="Logo" />
      
      <ul className="nav-menu">
        <li
          className={active === 'hero' ? 'active' : ''}
          onClick={() => handleClick('hero')}
        >
          <a href="#hero">Home</a>
        </li>
        <li
          className={active === 'about' ? 'active' : ''}
          onClick={() => handleClick('about')}
        >
          <a href="#about">About</a>
        </li>
        <li
          className={active === 'services' ? 'active' : ''}
          onClick={() => handleClick('services')}
        >
          <a href="#services">Services</a>
        </li>
        <li
          className={active === 'mywork' ? 'active' : ''}
          onClick={() => handleClick('mywork')}
        >
          <a href="#mywork">My Work</a>
        </li>
        <li
          className={active === 'contact' ? 'active' : ''}
          onClick={() => handleClick('contact')}
        >
          <a href="#contact">Contact</a>
        </li>
      </ul>
      
     
    </div>
  );
};

export default Navbar;
