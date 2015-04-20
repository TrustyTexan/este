import State from '../lib/state';

const initialState = require('../server/initialstate');

export const state = new State(initialState);
export const i18nCursor = state.cursor(['i18n']);
export const newTodoCursor = state.cursor(['newTodo']);
export const todosCursor = state.cursor(['todos']);
export const userCursor = state.cursor(['user']);
