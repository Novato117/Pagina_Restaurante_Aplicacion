import React from 'react';
import { SubHeading } from '../../components';
import images from '../../constants/images';
import './SpecialMenu.css';
{/*import { MenuItem } from '../../components';*/ }
{/*import data from '../../constants';*/ }

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id="menu">
    <div className='app__specialMenu-title'>
      <SubHeading title="Menu que se adapta a tu paladar" />
      <h1 className="headtext__cormorant">Especial de Hoy</h1>
    </div>
    <div className='app__specialMenu-menu'>
      <div className='app__specialMenu-menu_wine  flex__center'>
        <p className='app__specialMenu-menu_heading'>VIno y Cerveza</p>
        <div className='app__specialMenu_menu_items'>
          {/* {data.wines.map((wine, index) => (
            <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
         ))}*/}
        </div>
      </div>
      <div className='app__special-menu_img'>
        <img src={images.menu} alt="menu__img" />
      </div>
      <div className='app__specialMenu-menu_cocktails  flex__center'>
        <p className='app__specialMenu-menu_heading'>cocteles</p>
        <div className='app__specialMenu_menu_items'>
          {/*{data.cocktails.map((cocktail, index) => (
            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
          ))}*/}
        </div>
      </div>
    </div>
    <div style={{ merginTop: 15 }}>
      <button type='button' className='custom__button'>Ver Mas</button>
    </div>
  </div>
);

export default SpecialMenu;
