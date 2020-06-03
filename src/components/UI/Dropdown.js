import React, { useState, useRef, useEffect } from 'react';

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
        <span className="hidden sm:inline-block mr-2 text-white">
          Shawns Greenery
        </span>
        <button
          className="block h-8 w-8 rounded-full overflow-hidden focus:outline-none focus:shadow-outline"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="h-full w-full object-cover"
            viewBox="0 0 100 100"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="50" cy="50" r="50" />
          </svg>
          <svg
            className="h-4 w-auto pl-1 mt-1"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="gray"
          >
            <path d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
      </div>
      {isOpen && (
        <nav className="absolute right-0 mt-2 py-2 w-40 bg-white rounded-lg shadow-xl">
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
