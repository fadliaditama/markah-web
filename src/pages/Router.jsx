/* eslint-disable indent */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ClassDetail from './ClassDetail';
import Home from './Home';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/class-detail" exact component={ClassDetail} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
