import React from 'react';

const Logo = (props) => {
  return (
    <svg
      className={props.className ? props.className : 'h-8 w-auto'}
      viewBox="0 0 58 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="17.5" cy="17.5" r="16.5" fill="#DA4167" />
      <circle cx="39.5" cy="17.5" r="16.5" fill="#EBEBD3" />
      <circle cx="28.5" cy="39.5" r="16.5" fill="#F78764" />
    </svg>
  );
};

export default Logo;
