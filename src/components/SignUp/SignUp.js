import React, { useCallback, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import firebase from '../../firebase';

import Layout from '../Layout';
import Form from '../UI/Form';
import Input from '../UI/Input';
import Button from '../UI/Button';
import Logo from './../Header/HeaderItem/Logo';

const SignUp = ({ history }) => {
  const [account, setAccount] = useState({});

  // TODO: Handle exisiting account errors.
  const signUpHandler = useCallback(async () => {
    try {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(account.email, account.password);
      history.push('/orders');
    } catch (error) {
      console.log(error);
    }
  }, [account, history]);

  const onChangeHandler = (event) => {
    setAccount({ ...account, [event.target.name]: event.target.value });
  };

  // TODO: Add a confirm password input.
  // Also, is it possible to add another field to Firebase sign up so
  // we can also add the company name?
  return (
    <Layout>
      <div className="flex flex-col items-center mt-40">
        <div className="max-w-lg w-full">
          <div className="flex flex-col items-center">
            <Logo />
            <h2 className="text-2xl text-white mt-4">Sign up</h2>
          </div>
          <Form formStyle="home" onSubmit={signUpHandler}>
            {/* <div className="mt-2">
              <Input placeholder="Company Name"></Input>
            </div> */}
            <div className="mt-2">
              <Input
                name="email"
                type="email"
                placeholder="Email"
                changed={(e) => onChangeHandler(e)}
                validate={{ required: true }}
              ></Input>
            </div>
            <div className="mt-2">
              <Input
                name="password"
                type="password"
                placeholder="Password"
                changed={(e) => onChangeHandler(e)}
                validate={{
                  required: true,
                  minLength: {
                    value: 6,
                    message: 'Password must be atleast 6 characters long.',
                  },
                }}
              ></Input>
            </div>
            <div className="mt-2">
              <Button className="w-full bg-primaryButton" type="submit">
                Create Account
              </Button>
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
