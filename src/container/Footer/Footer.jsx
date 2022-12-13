import React from 'react';
import { FooterOverlay } from '../../components';
import './Footer.css';
import { Newsletter } from '../../components';
import images from '../../constants/images';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
const Footer = () => (
  <div className='app__footer section__padding' id="login">
    <FooterOverlay />
    <Newsletter />
    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contactanos</h1>
        <p className='p__opensans'>9 W 53rd St, New York, NY 10019, USA</p>
        <p className='p__opensans'>+1 212-344-123</p>
        <p className='p__opensans'>+1 212-555-1230</p>
      </div>
      <div className='app__footer-links_logo'>
        <img src={images.gericht} alt="footer__logo" />
        <p className='p__opensans'>La mejor manera de encontrarte a ti mismo es perderte en el servicio a los demas</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className='app__footer-links_icons'>
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className='app__footer-links_work'>
        <h1 className='app__footer-headtext'>Horas de trabajo</h1>
        <p className='p__opensans'>Lunes - Viernes</p>
        <p className='p__opensans'>08:00 am - 12:00 am</p>
        <p className='p__opensans'>Sabado - Domingo </p>
        <p className='p__opensans'>07:00 am - 11:00 pm</p>
      </div>
    </div>
    <div className='footer__copyright'>
      <p className="p__opensans">2021 Gericht. Derechos Reservados.</p>
    </div>
  </div>
);

export default Footer;
