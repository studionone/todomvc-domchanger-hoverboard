var domChanger = require('domchanger');

// Components and stores
var TodoStore = require('./stores/todos');
var App = require('./components/app');

// Instantiate the top-level app component
var instance = domChanger(App, document.querySelector('#app'));

// Wire the store into the app and start our "event loop"
var unsubscribe = TodoStore.getState(instance.update);
