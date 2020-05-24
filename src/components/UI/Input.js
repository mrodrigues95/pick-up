import React from 'react';

const Input = (props) => {
  return (
    <input
      className="bg-body w-full rounded-lg p-2"
      placeholder={props.placeholder}
    ></input>
  );
};

export default Input;
