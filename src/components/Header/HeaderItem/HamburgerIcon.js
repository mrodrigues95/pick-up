import React from 'react';
import app from '../../../base';

const HamburgerIcon = () => {
  return (
    <button onClick={() => app.auth().signOut()}>
      <svg width="12" height="9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path stroke="#fff" d="M0 .5h12M0 4.5h12M0 8.5h12" />
      </svg>
    </button>
  );
};

export default HamburgerIcon;
