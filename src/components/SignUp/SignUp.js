import React, { useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import firebase from '../../firebase';

import Layout from '../Layout';
import Form from '../UI/Form';
import Input from '../UI/Input';
import Button from '../UI/Button';
import Logo from './../Header/HeaderItem/Logo';

const SignUp = ({ history }) => {
  const isAuth = false;

  const signUpHandler = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;

      try {
        await firebase
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push('/orders');
      } catch (error) {
        console.log(error);
      }
    },
    [history]
  );

  // TODO: Add validation and a confirm password input.
  // Also, is it possible to add another field to Firebase sign up so
  // we can also add the company name?
  return (
    <Layout isAuthenticated={isAuth}>
      <div className="flex flex-col items-center mt-40">
        <div className="max-w-lg w-full">
          <div className="flex flex-col items-center">
            <Logo />
            <h2 className="text-2xl text-white mt-4">Sign up</h2>
          </div>
          <Form formStyle='home' onSubmit={signUpHandler}>
            {/* <div className="mt-2">
              <Input placeholder="Company Name"></Input>
            </div> */}
            <div className="mt-2">
              <Input name="email" type="email" placeholder="Email"></Input>
            </div>
            <div className="mt-2">
              <Input name="password" type="password" placeholder="Password"></Input>
            </div>
            <div className="mt-2">
              <Button classes={'w-full'} type="submit">Create Account</Button>
            </div>
          </Form>
          <p className="text-center text-white">
            Already have an account?
            <Link to="/signin" className="text-primaryButton font-hairline">
              {' '}
              Sign in.
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default withRouter(SignUp);
