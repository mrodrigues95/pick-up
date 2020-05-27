import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import firebase from '../../firebase';

import Layout from './../Layout';
import Form from './../UI/Form';
import Input from './../UI/Input';
import Button from './../UI/Button';
import Logo from '../Header/HeaderItem/Logo';
import { AuthContext } from './../Auth/Auth';

const SignIn = ({ history }) => {
  // TODO: use currentUser from our context instead of this.
  const isAuth = false;

  const signInHandler = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;

      try {
        await firebase
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push('/orders');
      } catch (error) {
        console.log(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);
  
  // If we have a currentUser, redirect them to the Orders component.
  if (currentUser) {
    return <Redirect to="/orders" />;
  }

  // TODO: Add validation.
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
              <Link
                to="/signup"
                className="text-sm text-primaryButton font-hairline"
              >
                register for a free one today
              </Link>
            </p>
          </div>
          <Form formStyle="home" onSubmit={signInHandler}>
            <div className="mt-2">
              <Input name="email" type="email" placeholder="Email"></Input>
            </div>
            <div className="mt-2">
              <Input
                name="password"
                type="password"
                placeholder="Password"
              ></Input>
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

export default withRouter(SignIn);
