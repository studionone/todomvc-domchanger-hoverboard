var Hoverboard = require('hoverboard');

// Hoverboard store
var TodoStore = {
    getInitialState: function() {
        return {
            todos: [{text: 'Hello world', done: false}]
        };
    },

    getState: function(state) {
        // Done to avoid mutation of the state via refs
        return JSON.parse(JSON.stringify(state));
    },

    onAddTodo: function(text) {
        var newTodos = this.state.todos.slice(0);

        newTodos.push({
            text: text,
            done: false
        });

        this.setState({ todos: newTodos });
    },

    onToggleCompletion: function(index) {
        var newTodos = this.state.todos.slice(0);
        
        if (index in newTodos === false) {
            return false;
        }

        if (newTodos[index].done === true) {
            newTodos[index].done = false;
        } else {
            newTodos[index].done = true;
        }

        this.setState({ todos: newTodos });
    },
};

// Make it a singleton and accesible everywhere
if ('TodoStore' in window === false) {
    window.TodoStore = Hoverboard(TodoStore);
}

module.exports = window.TodoStore;
