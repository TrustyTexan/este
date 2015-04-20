import App from './components/app';
import Home from './pages/home';
import NotFound from './pages/notfound';
import React from 'react';
import Todos from './pages/index';
import {DefaultRoute, NotFoundRoute, Route} from 'react-router';

export default (
  <Route handler={App} path='/'>
    <DefaultRoute handler={Home} name='home' />
    <NotFoundRoute handler={NotFound} name='not-found' />
    <Route handler={Todos} name='todos' path='/todos' />
  </Route>
);
