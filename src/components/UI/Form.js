import React from 'react';

const Form = (props) => {
  const VARIANTS = {
    signIn: 'flex flex-col bg-transparent mt-2 mx-3 p-4',
    default:
      'flex flex-col bg-white border border-black border-opacity-0 shadow-md mt-2 mx-3 p-4',
  };

  return (
    <form
      className={
        props.formStyle === 'signIn' ? VARIANTS.signIn : VARIANTS.default
      }
    >
      {props.children}
    </form>
  );
};

export default Form;
