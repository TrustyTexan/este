import State from '../lib/State';

var initialState = {
  newTodo: {
    title: ''
  },
  todos: []
};

export const state = new State(initialState);
export const newTodoCursor = state.cursor(['newTodo']);
export const todosCursor = state.cursor(['todos']);