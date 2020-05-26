import React from 'react';
import Layout from './../Layout';

const Home = () => {
  const isAuth = false;

  return <Layout isAuthenticated={isAuth} />;
};

export default Home;
