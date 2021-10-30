/* eslint-disable indent */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ClassDetail from './ClassDetail';
import Home from './Home';
import ArticleDetail from './ArticleDetail';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/class-detail" exact component={ClassDetail} />
        <Route path="/article-detail" exact component={ArticleDetail} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
