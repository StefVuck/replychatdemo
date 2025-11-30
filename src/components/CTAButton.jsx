import React from 'react';
import './CTAButton.css';

const CTAButton = ({ label, onClick }) => {
  return (
    <button className='cta-button' onClick={onClick}>
      {label}
    </button>
  );
};

export default CTAButton;
