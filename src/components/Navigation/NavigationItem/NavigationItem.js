import React from 'react';
import { Link } from 'react-router-dom';

const NavigationItem = (props) => {
  return (
    <li className="flex items-center p-3">
      <svg
        width="16"
        height="16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="#F4D35E" d="M0 0h16v16H0z" />
      </svg>
      <Link
        className="pl-1 text-orderHeader font-medium hover:border-primary hover:text-primary active:border-b-2 active:border-primary"
        to={props.link}
      >
        {props.children}
      </Link>
    </li>
  );
};

export default NavigationItem;
