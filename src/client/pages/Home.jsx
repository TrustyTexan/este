import React from 'react';
import {Link} from 'react-router';

export default React.createClass({

  displayName: 'Home',

  render () {
    return (
      <div>
        <p>
          An empty app bootstrap for react app with immutable data stores. Check <Link to='todos'>todos</Link>.
        </p>
      </div>
    );
  }

});
