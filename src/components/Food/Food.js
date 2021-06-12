import React from 'react';
import './Food.scss';

import ramen from '../../assets/images/ramen2.jpg';
import food3 from '../../assets/images/food3.jpg';
import onigiri from '../../assets/images/onigiri.jpg';
import tempura from '../../assets/images/tempura.jpg';

const Food = (props) => {
  const foodImageText = (image) => {
    return {
      backgroundImage: `linear-gradient(30deg, rgba(12, 34, 33, 0.8) 29.9%, rgba(38, 108, 85, 0.11) 30%), url('${image}')`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
  }

  return (
    <div id='food__section'>
      <h1 style={{ fontSize: '6rem' }}>Food</h1>
      <div className='food__showcase__container'>
        <article style={foodImageText(ramen)} className='food__card'>
          <h2>Ramen</h2>
          <ion-icon name="fast-food"></ion-icon>
        </article>
        <article style={foodImageText(food3)} className='food__card'>
          <h2>Sushi</h2>
        </article>
        <article style={foodImageText(onigiri)} className='food__card'>
          <h2>Onigiri</h2>
        </article>
        <article style={foodImageText(tempura)} className='food__card'>
          <h2>Tempura</h2>
        </article>
      </div>
    </div>
  );
}

export default Food;
