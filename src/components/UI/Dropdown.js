import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import firebase from './../../firebase';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const node = useRef();

  // Hide the dropdown.
  const handleClickOutside = (e) => {
    // Inside click.
    if (node.current.contains(e.target)) {
      return;
    }

    // Outside click -> close the dropdown.
    setIsOpen(false);
  };

  // Add an event listener whenever this component is mounted.
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={node} className="relative">
      <div className="flex items-center">
        <span className="hidden sm:inline-block mr-2 text-white font-thin">
          Shawns Greenery
        </span>
        <button
          className="block h-8 w-8 rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none focus:border-white focus:shadow-outline"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img
            className="w-full h-full object-cover"
            src="https://images.pexels.com/photos/5808/food-healthy-vegetables-village.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="Store Logo"
          ></img>
        </button>
      </div>
      {isOpen && (
        <nav className="absolute right-0 mt-2 py-2 w-40 bg-white rounded-lg shadow-xl">
          <Link to="/orders" className="block w-full px-4 py-2 text-left text-gray-800 hover:bg-blue-300 hover:text-white">Orders</Link>
          <button
            className="block w-full px-4 py-2 text-left text-gray-800 hover:bg-blue-300 hover:text-white"
            onClick={() => firebase.auth().signOut()}
          >
            Sign Out
          </button>
        </nav>
      )}
    </div>
  );
};

export default Dropdown;
