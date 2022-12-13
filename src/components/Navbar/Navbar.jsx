import React from 'react';
import images from '../../constants/images';
import './Navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { useState } from 'react';


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.gericht} alt='app__logo' />
      </div>
      <ul className='app__navbar-links'>
        <li className='p__opensans'><a href='#home'>Home</a></li>
        <li className='p__opensans'><a href='#about'>Acerca de nosotros</a></li>
        <li className='p__opensans'><a href='#menu'>Menu</a></li>
        <li className='p__opensans'><a href='#awards'>Premios</a></li>
        <li className='p__opensans'><a href='#contact'>Contacto</a></li>
      </ul>
      <div className='app__navbar-login'>
        <a href='#login' className='p__opensans'>Iniciar sesion/Registro</a>
        <div />
        <a href='/' className='p__opensans'>Book Table</a>
      </div>
      <div className='app_navbar-smallscreen'>
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)} />
            <ul className='app_navbar-smallscreen_links'>
              <li><a href='#home' onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href='#about' onClick={() => setToggleMenu(false)}></a>Acerca de nosotros</li>
              <li><a href='#menu' onClick={() => setToggleMenu(false)}></a>Menu</li>
              <li><a href='#awards' onClick={() => setToggleMenu(false)}></a>Premios</li>
              <li><a href='#contact' onClick={() => setToggleMenu(false)}></a>Contacto</li>
            </ul>
          </div>
        )}
      </div>

    </nav>
  );
};
export default Navbar;
