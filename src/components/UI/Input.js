import React from 'react';
import { useFormContext } from 'react-hook-form';

const Input = (props) => {
  const form = useFormContext();

  const className = props.className
    ? 'bg-body w-full rounded-lg p-2 outline-none ' + props.className
    : 'bg-body w-full rounded-lg p-2 outline-none focus:shadow-outline';

  return (
    <>
      <input
        className={className}
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.changed}
        ref={form && form.register(props.validate)}
      ></input>
      <span className="text-red-600 font-light">
        {form &&
          form.errors[props.name] &&
          `Please provide a valid ${props.placeholder.toLowerCase()}.`}
      </span>
    </>
  );
};

export default Input;
