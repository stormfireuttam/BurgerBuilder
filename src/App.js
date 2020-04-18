import React, { Component } from 'react';
import {Router, Switch} from 'react-router-dom';
import Checkout from '../src/containers/Checkout/Checkout';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  render () {
    return (
      <div>
        {/*<Layout>
          <BurgerBuilder />
          <Checkout />
        </Layout> */}
        <Layout>
          <Switch>
          <Router path="/checkout" component={Checkout} />
          <Router path="/" exact component={BurgerBuilder} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
