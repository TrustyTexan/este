import {Dispatcher} from 'flux';

const dispatcher = new Dispatcher;

export function register (callback: Function): string {
  return dispatcher.register(callback);
}

export function dispatch (action: Function, data: ?Object) {
  if (process.env.NODE_ENV !== 'production') {
    console.log(action);
    if (action.toString === Function.prototype.toString) {
      throw new Error('Action toString has to be overridden with dispatcher.setToString.');
    }
  }

  dispatcher.dispatch({action, data});
}
