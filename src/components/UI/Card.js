import React from 'react';

const Card = (props) => {
  return (
    <div className="flex items-center justify-between mt-2 p-4 mx-3 my-3 bg-white border border-black border-opacity-0 shadow-md">
      {props.children}
    </div>
  );
};

export default Card;
