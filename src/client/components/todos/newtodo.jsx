import React from 'react';
import immutable from 'immutable';
import {addTodo, onNewTodoFieldChange} from '../../actions/todoActions';
import {addons} from 'react/addons';

export default React.createClass({
  mixins: [addons.PureRenderMixin],

  displayName: 'newtodo',

  propTypes: {
    todo: React.PropTypes.instanceOf(immutable.Map)
  },

  onKeyDown (e) {
    if (e.key === 'Enter')
      addTodo(this.props.todo);
  },

  render () {
    return (
      <input
        autoFocus
        className='new-todo'
        name='title'
        onChange={onNewTodoFieldChange}
        onKeyDown={this.onKeyDown}
        placeholder='What needs to be done?'
        value={this.props.todo.get('title')}
      />
    );
  }

});
