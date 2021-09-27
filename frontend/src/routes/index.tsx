import React from 'react';
import Clothes from '../pages/Clothes';
import NewProduct from '../pages/NewProduct';
import { Switch, Route } from 'react-router-dom';
import PutProducts from '../pages/PutProducts';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Clothes} />
      <Route path="/newProduct" component={NewProduct} />
      <Route path="/putProducts" component={PutProducts} />
    </Switch>
  );
};

export default Routes;
