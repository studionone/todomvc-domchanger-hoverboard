var $ = window.$ = require('domtastic');
var domChanger = require('domchanger');

// Components
var App = require('./components/app');

// Flux
var TodoStore = require('./stores/todos');

// Instantiate the top-level app component
var instance = domChanger(App, $('#app').get(0));

// Wire the store into the app
var unsubscribe = TodoStore.getState(function(state) {
    instance.update(state.todos);
});
