import React from 'react';
import './Locations.scss';

import tokyo from '../../assets/images/tokyo-min.jpg';
import kyoto from '../../assets/images/kyoto-min.jpg';
import osaka from '../../assets/images/osaka-min.jpg';

const Locations = () => {
  const locationImageText = (image) => {
    return {
      backgroundImage: `linear-gradient(45deg, rgba(12, 34, 33, 0.9) 24.9%, rgba(38, 108, 85, 0.11) 25%), url('${image}')`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
  }

  return (
    <div id='locations__section'>
      <h1 className='section__title' style={{ marginBottom: '4rem' }}>Locations</h1>
      <article style={locationImageText(tokyo)} className='locations__card'>
        <div className='locations__details'>
          <h1>Tokyo</h1>
        </div>
        {/* <img alt='location' src={tokyo}></img> */}
      </article>
      <article style={locationImageText(kyoto)} className='locations__card'>
        <div className='locations__details'>
          <h1>Kyoto</h1>
        </div>
        {/* <img alt='location' src={kyoto}></img> */}
      </article>
      <article style={locationImageText(osaka)} className='locations__card'>
        <div className='locations__details'>
          <h1>Osaka</h1>
        </div>
        {/* <img alt='location' src={osaka}></img> */}
      </article>
    </div>
  );
}

export default Locations;
