import React from 'react';
import { SubHeading } from '../../components/index';
import './Newsletter.css';

const Newsletter = () => (
  <div className='app__newsletter'>
    <div className='app__newsletter-heading'>
      <SubHeading title="Newsletter" />
      <h1 className='headtext__cormorant'>Suscribete a nuestro boletin</h1>
      <p className='p__opensans'>No te pierdas de Nuestras actualizaciones</p>
    </div>
    <div className='app__newsletter-input flex__cente'>
      <input type="email" placeholder='ingresa tu Email' />
      <button type='button' className='custom__button'>suscribete</button>
    </div>
  </div>
);

export default Newsletter;
