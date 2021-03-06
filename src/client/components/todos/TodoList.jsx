import React from 'react';
import TodoItem from './TodoItem';
import immutable from 'immutable';
import {addons} from 'react/addons';

export default React.createClass({
  // Try add hunderds todos. Typing new todo is still superfast.
  mixins: [addons.PureRenderMixin],

  displayName: 'TodoList',

  propTypes: {
    // Whenever component prop is an immutable structure, use PureRenderMixin.
    todos: React.PropTypes.instanceOf(immutable.List)
  },

  render () {
    return (
      <ol>
        {this.props.todos.map((todo, i) => {
          return <TodoItem todo={todo} key={todo.get('id')} />;
          // toArray will not be required in React 0.13.
        }).toArray()}
      </ol>
    );
  }

});
