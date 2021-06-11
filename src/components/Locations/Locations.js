import React from 'react';
import './Locations.scss';

import tokyo from '../../assets/images/tokyo-min.jpg';
import kyoto from '../../assets/images/kyoto-min.jpg';
import osaka from '../../assets/images/osaka-min.jpg';

const Locations = () => {
  return (
    <div id='locations__section'>
      <h1 style={{ fontSize: '6rem', marginBottom: '4rem' }}>Locations</h1>
      <article className='locations__card'>
        <div className='locations__details'>
          <h1 style={{ fontSize: '4rem' }}>Tokyo</h1>
          <p style={{ textAlign: 'right' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit nulla vel tincidunt pretium. Nunc porta sem ligula, eu cursus mauris ultricies ut. Sed eget ligula quis dolor tempor facilisis. Cras non neque vitae lorem ultricies sodales sed a urna. Ut id erat sapien. Etiam id condimentum mauris, vitae pretium dui. Ut porttitor tellus ipsum, ac cursus libero blandit eget. Nunc varius augue ullamcorper mauris consequat, ac pretium leo posuere. In quis nibh ligula. Nunc vitae urna non elit facilisis euismod. Donec imperdiet, diam eu tempus pretium, nisi nunc imperdiet orci, id varius turpis justo volutpat ex. Nulla pellentesque ligula ut turpis mollis sollicitudin ac vitae elit.
          </p>
        </div>
        <img src={tokyo}></img>
      </article>
      <article className='locations__card'>
        <img src={kyoto}></img>
        <div className='locations__details'>
          <h1 style={{ fontSize: '4rem' }}>Kyoto</h1>
          <p style={{ textAlign: 'left' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit nulla vel tincidunt pretium. Nunc porta sem ligula, eu cursus mauris ultricies ut. Sed eget ligula quis dolor tempor facilisis. Cras non neque vitae lorem ultricies sodales sed a urna. Ut id erat sapien. Etiam id condimentum mauris, vitae pretium dui. Ut porttitor tellus ipsum, ac cursus libero blandit eget. Nunc varius augue ullamcorper mauris consequat, ac pretium leo posuere. In quis nibh ligula. Nunc vitae urna non elit facilisis euismod. Donec imperdiet, diam eu tempus pretium, nisi nunc imperdiet orci, id varius turpis justo volutpat ex. Nulla pellentesque ligula ut turpis mollis sollicitudin ac vitae elit.
          </p>
        </div>
      </article>
      <article className='locations__card'>
        <div className='locations__details'>
          <h1 style={{ fontSize: '4rem' }}>Osaka</h1>
          <p style={{ textAlign: 'right' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit nulla vel tincidunt pretium. Nunc porta sem ligula, eu cursus mauris ultricies ut. Sed eget ligula quis dolor tempor facilisis. Cras non neque vitae lorem ultricies sodales sed a urna. Ut id erat sapien. Etiam id condimentum mauris, vitae pretium dui. Ut porttitor tellus ipsum, ac cursus libero blandit eget. Nunc varius augue ullamcorper mauris consequat, ac pretium leo posuere. In quis nibh ligula. Nunc vitae urna non elit facilisis euismod. Donec imperdiet, diam eu tempus pretium, nisi nunc imperdiet orci, id varius turpis justo volutpat ex. Nulla pellentesque ligula ut turpis mollis sollicitudin ac vitae elit.
          </p>
        </div>
        <img src={osaka}></img>
      </article>
    </div>
  );
}

export default Locations;
