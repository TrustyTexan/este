import React from 'react';
import classnames from 'classnames';
import immutable from 'immutable';
import {addons} from 'react/addons';
import {deleteTodo} from '../../actions/TodoActions';

export default React.createClass({
  mixins: [addons.PureRenderMixin],

  displayName: 'todoitem',

  propTypes: {
    todo: React.PropTypes.instanceOf(immutable.Map)
  },

  render () {
    const todo = this.props.todo;

    return (
      <li className={classnames({editing: false})}>
        <label>{todo.get('title')}</label>
        <button onClick={() => deleteTodo(todo)}>x</button>
      </li>
    );
  }

});
