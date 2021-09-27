import React from 'react';
import Clothes from '../pages/Clothes';
import NewProduct from '../pages/NewProduct';
import { Switch, Route } from 'react-router-dom';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Clothes} />
      <Route path="/newProduct" component={NewProduct} />
    </Switch>
  );
};

export default Routes;
