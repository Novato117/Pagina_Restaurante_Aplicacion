import React from 'react';
import images from '../../constants/images';
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className='app__wrapper_info'>
      <SubHeading title="Chef's word" />
      <h1 className='headtext__cormorant'>En lo que creemos</h1>
      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt="quote_img" />
          <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit</p>
        </div>
        <p className='p__opensans'>auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>
      </div>
      <div className='app__chef-sign'>
        <p>Kevin Luo</p>
        <p className='p__opensans'>Chef y Fundador</p>
        <img src={images.sign} />
      </div>
    </div>
  </div>
);

export default Chef;
