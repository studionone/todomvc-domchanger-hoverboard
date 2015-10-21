var domChanger = require('domchanger');

// Components and stores
var TodoStore = require('./stores/todos');
var App = require('./components/app');

// Instantiate the top-level app component
var instance = domChanger(App, document.querySelector('#app'));

// Wire the store into the app
var unsubscribe = TodoStore.getState(function(state) {
    console.log(state);
    instance.update(state.todos);
});
