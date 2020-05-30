import React from 'react';

const Card = (props) => {
  return (
    <div className="flex items-center justify-between max-w-screen-lg mt-2 p-4 mx-3 my-3 bg-white border border-black rounded border-opacity-0 shadow-md lg:mx-auto">
      {props.children}
    </div>
  );
};

export default Card;
