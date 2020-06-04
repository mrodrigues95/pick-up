import React, { useCallback, useContext, useState } from 'react';
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
  const [account, setAccount] = useState({});
  const [accountIsInvalid, setAccountIsInvalid] = useState(false);

  // TODO: Show a spinner while this is fetching account details
  const signInHandler = useCallback(async () => {
    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(account.email, account.password);
      history.push('/orders');
    } catch (error) {
      setAccountIsInvalid(true);
    }
  }, [account, history]);

  const onChangeHandler = (event) => {
    setAccount({ ...account, [event.target.name]: event.target.value });
  };

  const { currentUser } = useContext(AuthContext);

  // If we have a currentUser, redirect them to the Orders component.
  if (currentUser) {
    return <Redirect to="/orders" />;
  }

  return (
    <Layout>
      <div className="flex flex-col items-center mt-40 md:mt-64">
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
                validate={{ required: true }}
              ></Input>
            </div>
            {accountIsInvalid && (
              <span className="text-red-600 font-light">
                Invalid email or password.
              </span>
            )}
            <div className="mt-2">
              <Button type="submit" className="w-full bg-primaryButton">
                Sign In
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </Layout>
  );
};

export default withRouter(SignIn);
