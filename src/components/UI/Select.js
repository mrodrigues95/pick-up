import React from 'react';

const Select = (props) => {
  return (
    <select
      className="w-full bg-white border rounded-md p-1"
      value={props.value}
      onChange={props.changed}
    >
      {props.options &&
        props.options.map((name, index) => (
          <option key={index} value={name}>
            {name}
          </option>
        ))}
    </select>
  );
};

export default Select;
