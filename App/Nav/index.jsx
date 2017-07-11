import React from 'react';
import './index.css';

const Nav = (props) => {
  return (
    <nav className='Nav' style={{ background: props.client.brandPrimaryColor }}>
      <a href='/'>{props.client.brandName}</a>
    </nav>
  )
}

export default Nav;
