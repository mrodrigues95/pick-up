import React from 'react';

const Form = (props) => {
  return (
    <form className="flex flex-col bg-white border border-black border-opacity-0 shadow-md mt-2 mx-3 p-2">
      {props.children}
    </form>
  );
};

export default Form;
