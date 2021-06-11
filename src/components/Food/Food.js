import React from 'react';
import './Food.scss';

import ramen from '../../assets/images/ramen2.jpg';
import food2 from '../../assets/images/food2.jpg';
import food3 from '../../assets/images/food3.jpg';

const Food = (props) => {
  const foodImageText = (image) => {
    return {
      backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5) 5%, rgba(0, 0, 0, 0.1) 92%), url('${image}')`,
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
        </article>
        <article style={foodImageText(food2)} className='food__card'>
          <h2>Sushi</h2>
        </article>
        <article style={foodImageText(food3)} className='food__card'>
          <h2>idfk</h2>
        </article>
      </div>
    </div>
  );
}

export default Food;
