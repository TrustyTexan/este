import DocumentTitle from 'react-document-title';
import NewTodo from '../components/todos/newtodo';
import React from 'react';
import TodoList from '../components/todos/todolist';
import {addHundredTodos, clearAll} from '../todos/actions';
import {getNewTodo, getTodos} from '../todos/store';
import {state} from '../state';

// Leverage webpack require goodness for feature toggle based dead code removal.
require('../../../assets/css/todos.styl');

// Naïve undo implementation.
const undoStates = [];

export default React.createClass({

  displayName: 'todos',

  componentDidMount () {
    state.on('change', this.onStateChange);
    document.addEventListener('keypress', this.onDocumentKeypress);
  },

  componentWillUnmount () {
    state.removeListener('change', this.onStateChange);
    document.removeEventListener('keypress', this.onDocumentKeypress);
  },

  onStateChange (state) {
    undoStates.push(state);
  },

  onDocumentKeypress (e) {
    // Press shift+ctrl+s to save app state and shift+ctrl+l to load.
    if (!e.shiftKey || !e.ctrlKey) return;
    switch (e.keyCode) {
      case 19:
        window._appState = state.save();
        window._appStateString = JSON.stringify(window._appState);
        console.log('app state saved');
        console.log('copy the state to your clipboard by calling copy(_appStateString)');
        console.log('for dev type _appState and press enter');
        break;
      case 12:
        let stateStr = window.prompt('Path the serialized state into the input');
        let newState = JSON.parse(stateStr);
        if (!newState) return;
        state.load(newState);
        break;
    }
  },

  undo () {
    undoStates.pop();
    state.set(undoStates.pop());
  },

  render () {
    // This is just a demo. In real app you would set first undo elsewhere.
    if (!undoStates.length) undoStates.push(state.get());

    // This is composite component. It load its data from store, and passes them
    // through props, so NewTodo and TodoList can leverage PureRenderMixin.
    const newTodo = getNewTodo();
    const todos = getTodos();

    return (
      <DocumentTitle title='Todos'>
        <section id='todos'>
          <NewTodo todo={newTodo} />
          <TodoList todos={todos} />
          <div className='buttons'>
            <button
              children='clearAll'
              disabled={!todos.size}
              onClick={clearAll}
            />
            <button
              children='Add 100 Todos'
              onClick={addHundredTodos}
            />
            <button
              disabled={undoStates.length === 1}
              onClick={() => this.undo()}
            >Undo {undoStates.length > 1 && ('(' + (undoStates.length - 1) + ')')}</button>
          </div>
        </section>
      </DocumentTitle>
    );
  }

});
