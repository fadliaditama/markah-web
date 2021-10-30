/* eslint-disable linebreak-style */
/* eslint-disable indent */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ClassDetail from './ClassDetail';
import Home from './Home';
import ArticleDetail from './ArticleDetail';
import ListClass from './ListClass';
import ListArticles from './ListArticles';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/class-detail" exact component={ClassDetail} />
        <Route path="/article-detail" exact component={ArticleDetail} />
        <Route path="/register-class" exact component={ListClass} />
        <Route path="/articles" exact component={ListArticles} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
