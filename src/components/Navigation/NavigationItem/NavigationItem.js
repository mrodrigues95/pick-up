import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const NavigationItem = (props) => {
  return (
    <li className="flex items-start px-3 pt-3">
      <svg
        className="mt-1"
        width="16"
        height="16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="#F4D35E" d="M0 0h16v16H0z" />
      </svg>
      <NavLink
        className="pl-1 h-10 text-primaryText hover:text-primary"
        activeClassName="pl-1 h-10 text-primary border-b border-primary hover:text-primary"
        to={props.link}
      >
        {props.children}
      </NavLink>
    </li>
  );
};

export default withRouter(NavigationItem);
