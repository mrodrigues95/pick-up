import React from 'react';
import { Link } from 'react-router-dom';

import Layout from './../Layout';
import Form from './../UI/Form';
import Input from './../UI/Input';
import Button from './../UI/Button';
import Logo from '../Header/HeaderItem/Logo';

const SignIn = () => {
  const isAuth = false;

  return (
    <Layout isAuthenticated={isAuth}>
      <div className="flex flex-col items-center mt-40">
        <div className="max-w-lg w-full">
          <div className="flex flex-col items-center">
            <Logo />
            <h2 className="text-2xl text-white mt-4">
              Sign in to your account
            </h2>
            <p className="text-white">
              Or{' '}
              <Link to="/signup" className="text-sm text-primaryButton font-hairline">
                register for a free one today
              </Link>
            </p>
          </div>
          <Form formStyle={'home'}>
            <div className="mt-2">
              <Input placeholder="Email"></Input>
            </div>
            <div className="mt-2">
              <Input placeholder="Password"></Input>
            </div>
            <div className="mt-2">
              <Button classes={'w-full'}>Sign In</Button>
            </div>
          </Form>
        </div>
      </div>
    </Layout>
  );
};

export default SignIn;
