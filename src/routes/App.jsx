import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Checkout from '../containers/Checkout';
import Layout from '../components/Layout';
//Primer problema reto 07 Platzi
import NotFound from '../components/NotFound';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/checkout" component={Checkout} />
        //Primer problema reto 07 Platzi
        <Route exact path="*" component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;