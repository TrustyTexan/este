## Techniques

- ES6 and other future JavaScripts dialects with the best transpiler [babeljs.io](https://babeljs.io/). [JSX](http://facebook.github.io/react/docs/jsx-in-depth.html) and [Flowtype](http://flowtype.org/) syntax supported as well. Sourcemaps enabled by default.
- React with Flux with immutable global app state.
- Stateless actions and stores.
- Vanilla Flux, we don't need over abstracted frameworks.
- Webpack css livereload with hot module reload even for React components.
- Easy undo/redo and app state load/save.
- Super fast rendering with [immutable.js](http://facebook.github.io/immutable-js).
- Well tuned webpack devstack with handy [notifier](https://github.com/mikaelbr/node-notifier).
- Stylesheets in CSS, LESS, SASS or Stylus.
- Optimized for [critical rendering path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path).

## Prerequisites

Install [iojs](https://iojs.org/) or [node.js](http://nodejs.org).
Then install [gulp.js](http://gulpjs.com/).
```shell
npm install -g gulp
```

## Create App

```shell
git clone https://github.com/spredfast/reactstarter.git myapp
cd myapp
npm install
```

## Start Development

- run `gulp`
- point your browser to [localhost:8000](http://localhost:8000)

## Dev Tasks

- `gulp` run app in development mode
- `gulp -p` run app in production mode
- `gulp test`

## CI Tasks

- `npm start` just run app, remember to set NODE_ENV=production and others enviroment variables.
- `npm postinstall` just alias for `gulp build --production`, useful for Heroku.
- `npm test` just alias for `gulp test`


## Documentation

Code is documentation itself as it illustrates various patterns, but for start you should read something about [React.js](http://facebook.github.io/react/). Then you should learn [what is the Flux application architecture](https://medium.com/brigade-engineering/what-is-the-flux-application-architecture-b57ebca85b9e). Now refresh you JavaScript knowledge about "new" JavaScript - [learn ES6](https://babeljs.io/docs/learn-es6/). This stack uses [immutable.js](http://facebook.github.io/immutable-js/) and for a [good reason](https://github.com/facebook/immutable-js/#the-case-for-immutability). Check this nice short [video](https://www.youtube.com/watch?v=5yHFTN-_mOo Ok, Server side you.http://expressjs.com/), to see one of many great advantages of [functional programming](http://www.smashingmagazine.com/2014/07/02/dont-be-scared-of-functional-programming/).

## Links

- [ST3 ESLint Setup Part 1](https://medium.com/@dan_abramov/lint-like-it-s-2015-6987d44c5b48)
- [ST3 ESLint Setup Part 2 (JSX)](https://github.com/yannickcr/eslint-plugin-react)
- [ESLint Rules](http://eslint.org/docs/rules/)


## Tips

- App state snapshot: Press `shift+ctrl+s`, then open dev console and type `_appState`.
- Use `const` by default, `let` if you have to rebind a variable.
- Use `() =>` lambda expression for all predicates and anonymous functions.


## Credit

Forked: Daniel Steigerwald, https://github.com/steida/este
