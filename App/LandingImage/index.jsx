import React from 'react';
import './index.css';

import ActionButton from './ActionButton';

const LandingImage = (props) => {
  return (
    <section className='LandingImage'>
      <img src={props.client.brandImageUrl} />

      <ActionButton>{props.client.brandCallToAction}</ActionButton>
    </section>
  )
}

export default LandingImage;
