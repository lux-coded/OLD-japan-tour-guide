import React from 'react';
import Nav from '../Nav/Nav';
import './Header.scss';

import sakuraBackground from '../../assets/images/sakura-background.jpg';
import mountFuji from '../../assets/images/mount-fuji.jpg';
import garden from '../../assets/images/garden2.jpg';

const Header = (props) => {
  const headerStyle = {
      color: 'white',
    };

  return (
    <header id='header' style={headerStyle}>
      <Nav />
      <div className='header__title'>
        <h1>Japan</h1>
        <h1 style={{ color: 'rgb(220, 47, 47)' }}>日本</h1>
      </div>
    </header>
  );
}

export default Header;
