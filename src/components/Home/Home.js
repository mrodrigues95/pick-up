import React from 'react';

import Layout from './../Layout';
import Logo from './../Header/HeaderItem/Logo';
import Input from '../UI/Input';
import Button from '../UI/Button';

const Home = () => {
  const isAuth = false;

  return (
    <Layout isAuthenticated={isAuth}>
      <Logo />
      <h1>pick.up</h1>
      <form>
          <Input placeholder="Enter your unique PIN" />
          <Button>View Order</Button>
      </form>
    </Layout>
  );
};

export default Home;
