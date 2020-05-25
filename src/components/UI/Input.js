import React from 'react';

const Input = (props) => {
  return (
    <input
      className="bg-body w-full rounded-lg p-2"
      placeholder={props.placeholder}
      onChange={props.changed}
    ></input>
  );
};

export default Input;
