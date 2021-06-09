import React from 'react';
import './Food.scss';

const Food = (props) => {
  return (
    <div id='food__section'>
      <h1>Food</h1>
      <div className='food__showcase__container'>
        <article className='food__card'>
          <img src='../../assets/images/food2.jpg'></img>
        </article>
        <article className='food__card'>

        </article>
        <article className='food__card'>

        </article>
      </div>
    </div>
  );
}

export default Food;
