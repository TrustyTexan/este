import DocumentTitle from 'react-document-title';
import React from 'react';
import {Link, RouteHandler} from 'react-router';
import {state} from '../state';

// Leverage webpack require goodness for feature toggle based dead code removal.
require('../../../assets/css/app.styl');

export default React.createClass({
  displayName: 'App',

  componentDidMount () {
    // Must be required here because there is no DOM in Node.js. Rememeber,
    // mocking DOM in Node.js is an anti-pattern, because it can confuse
    // isomorphic libraries. TODO: Wait for iOS fix, then remove.
    require('fastclick').attach(document.body);

    state.on('change', () => {
      // Try hundreds todos with and without PureRenderMixin.
      console.time('whole app rerender');
      this.forceUpdate(() => {
        console.timeEnd('whole app rerender');
      });
    });
  },

  render () {
    return (
      <DocumentTitle title='App Bootstrap'>
        <div className='page'>
          <header>
            <h1>App Bootstrap</h1>
            <ul>
              <li><Link to='home'>Home</Link></li>
              <li><Link to='todos'>Todos</Link></li>
            </ul>
          </header>
          <RouteHandler />
        </div>
      </DocumentTitle>
    );
  }

});
