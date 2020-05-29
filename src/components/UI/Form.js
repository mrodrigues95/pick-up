import React from 'react';
import { useForm, FormContext } from 'react-hook-form';

const Form = (props) => {
  const form = useForm({mode: 'onBlur'});

  const VARIANTS = {
    home: 'flex flex-col bg-transparent mt-2 mx-3 p-4',
    default:
      'flex flex-col bg-white border border-black border-opacity-0 shadow-md mt-2 mx-3 p-4',
  };

  return (
    <FormContext {...form}>
      <form
        onSubmit={form.handleSubmit(props.onSubmit)}
        className={
          props.formStyle === 'home' ? VARIANTS.home : VARIANTS.default
        }
      >
        {props.children}
      </form>
    </FormContext>
  );
};

export default Form;
