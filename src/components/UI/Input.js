import React from 'react';

const Input = (props) => {
  const className = props.className
    ? 'bg-body w-full rounded-lg p-2 ' + props.className
    : 'bg-body w-full rounded-lg p-2';

  return (
    <input
      className={className}
      name={props.name}
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.changed}
    ></input>
  );
};

export default Input;
