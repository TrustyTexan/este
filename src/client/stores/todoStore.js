import * as actions from '../actions/TodoActions';
import {Range, Record} from 'immutable';
import {newTodoCursor, todosCursor} from '../state';
import {register} from '../dispatcher';


function getRandomString () {
  var x = 2147483648;
  return Math.floor(Math.random() * x).toString(36) +
         Math.abs(Math.floor(Math.random() * x) ^ Date.now()).toString(36);
}

const TodoItem = Record({
  id: '',
  title: ''
});

export const dispatchToken = register(({action, data}) => {

  switch (action) {
    case actions.onNewTodoFieldChange:
      // Always use destructing vars. It's explicit.
      var {name, value} = data;
      newTodoCursor(todo => todo.set(name, value));
      break;

    case actions.addTodo:
      var todo = data;
      todosCursor(todos => todos.push(new TodoItem({
        id: getRandomString(),
        title: todo.get('title')
      }).toMap()));
      newTodoCursor(todo => new TodoItem().toMap());
      break;

    case actions.deleteTodo:
      var todo = data;
      todosCursor(todos => todos.delete(todos.indexOf(todo)));
      break;

    case actions.clearAll:
      todosCursor(todos => todos.clear());
      break;

    case actions.addHundredTodos:
      todosCursor(todos => {
        return todos.withMutations(list => {
          Range(0, 100).forEach(i => {
            let id = getRandomString();
            list.push(new TodoItem({
              id: id,
              title: `Item #${id}`
            }).toMap());
          });
        });
      });
      break;
  }

});

export function getNewTodo () {
  return newTodoCursor();
}

export function getTodos () {
  return todosCursor();
}
