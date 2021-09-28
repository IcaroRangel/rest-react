import React from 'react';
import Clothes from '../pages/Clothes';
import NewProduct from '../pages/NewProduct';
import { Switch, Route } from 'react-router-dom';
import UpdateProduct from '../pages/UpdateProduct';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Clothes} />
      <Route path="/newProduct" component={NewProduct} />
      <Route path="/updateProduct/:id" component={UpdateProduct} />
    </Switch>
  );
};

export default Routes;
