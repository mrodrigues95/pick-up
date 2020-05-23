import React from 'react';
import './css/main.css';

import Layout from './components/Layout';
import Navigation from './components/Navigation/Navigation';
import Card from './components/UI/Card';

const App = () => {
  return (
    <Layout>
      <Navigation />
      <Card />
    </Layout>
  );
};

export default App;
