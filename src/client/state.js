import State from '../lib/State';

export const state = new State({});
export const newTodoCursor = state.cursor(['newTodo'], { title: '' });
export const todosCursor = state.cursor(['todos'], []);