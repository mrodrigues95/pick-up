import React from 'react';

import Layout from './../Layout';
import Logo from './../Header/HeaderItem/Logo';
import Input from '../UI/Input';
import Button from '../UI/Button';

const Home = () => {
  return (
    <Layout>
      <div className="flex flex-col w-full max-w-xl p-3 mt-40 m-auto">
        <div className="flex items-start">
          <Logo className="h-16 w-auto" />
          <h1 className="text-4xl text-white ml-4">pick.up</h1>
        </div>
        <form className="flex flex-col mt-2">
          <div className="mb-2">
            <Input placeholder="Enter your unique PIN" />
          </div>
          <div className="ml-auto">
            <Button className="bg-primaryButton">View Order</Button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Home;
