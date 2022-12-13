import React from 'react';
import { SubHeading } from '../../components';
import images from '../../constants/images';
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id="home">
    <div className='app__wrappper_info'>
      <SubHeading title="Persigue el nuevo sabor" />
      <h1 className='app__header-h1'>La Clave de la buena mesa</h1>
      <p className='p__opensans' style={{ margin: '2rem 0' }}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus</p>
      <button type='button' className='custom__button'>Explorar Menu</button>
    </div>
    <div className='app__header-img'>
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
