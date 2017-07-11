import React from 'react';
import './index.css'

const Footer = (props) => {
  return (
    <footer>
      <legal>
        Copyright (c) 2017 {props.brandName} All Rights Reserved.
      </legal>
    </footer>
  )
};

export default Footer;
