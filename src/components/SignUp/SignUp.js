import React from 'react';

import Layout from '../Layout';
import Form from '../UI/Form';
import Input from '../UI/Input';
import Button from '../UI/Button';
import Logo from './../Header/HeaderItem/Logo';

const SignUp = () => {
  const isAuth = false;

  return (
    <Layout isAuthenticated={isAuth}>
      <div className="flex flex-col items-center mt-40">
        <div className="max-w-lg w-full">
          <div className="flex flex-col items-center">
            <Logo />
            <h2 className="text-2xl text-white mt-4">Sign up</h2>
          </div>
          <Form formStyle={'home'}>
            <div className="mt-2">
              <Input placeholder="Company Name"></Input>
            </div>
            <div className="mt-2">
              <Input placeholder="Email"></Input>
            </div>
            <div className="mt-2">
              <Input placeholder="Password"></Input>
            </div>
            <div className="mt-2">
              <Button classes={'w-full'}>Create Account</Button>
            </div>
          </Form>
        </div>
      </div>
    </Layout>
  );
};

export default SignUp;
