var domChanger = require('domchanger');
var appCss = require('todomvc-app-css/index.css');

// Components and stores
var TodoStore = require('./stores/todos');
var App = require('./components/app');

// Instantiate the top-level app component
var instance = domChanger(App, document.querySelector('.todoapp'));

// Wire the store into the app and start our "event loop"
var unsubscribe = TodoStore.getState(instance.update);
