import React from 'react';
import clsx from 'clsx';

const Button = (props) => {
  return (
    <button
      className={clsx(
        'text-white text-center rounded-md shadow-lg p-1 px-4 focus:outline-none',
        props.className
      )}
      type={props.type}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
