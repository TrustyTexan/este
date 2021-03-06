import App from './components/App';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import React from 'react';
import Todos from './pages/todos';
import {DefaultRoute, NotFoundRoute, Route} from 'react-router';

export default (
  <Route handler={App} path='/'>
    <DefaultRoute handler={Home} name='home' />
    <NotFoundRoute handler={NotFound} name='not-found' />
    <Route handler={Todos} name='todos' path='/todos' />
  </Route>
);
