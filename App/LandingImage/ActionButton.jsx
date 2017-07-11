import React from 'react';
import './ActionButton.css';

const ActionButton = (props) => {
  return <button className='ActionButton'>{props.children}</button>
};

export default ActionButton;
