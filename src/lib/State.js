import EventEmitter from 'eventemitter3';
import Immutable from 'immutable';

export default class State extends EventEmitter {

  constructor (state, reviver: ?Function) {
    this._state = null;
    this._reviver = reviver;
    this.load(state || {});
  }

  load (state: Object) {
    this.set(Immutable.Map.isMap(state)
      ? state
      : Immutable.fromJS(state, this._reviver)
    );
  }

  set (state) {
    if (this._state === state) return;
    this._state = state;
    this.emit('change', this._state);
  }

  get () {
    return this._state;
  }

  save (): Object {
    return this._state.toJS();
  }

  toConsole () {
    console.log(JSON.stringify(this.save()));
  }

  cursor (path, defaultVal) {
    return (update) => {
      if (update) {
        this.set(this._state.updateIn(path, update));
      }
      else {
        var resp = this._state.getIn(path);
        if (typeof resp === 'undefined') {
          this.set(this._state.setIn(path, Immutable.fromJS(defaultVal)));
          console.log(this._state.getIn(path));
          return this._state.getIn(path);
        }
        else {
          return resp;
        }
      }
    };
  }
}
