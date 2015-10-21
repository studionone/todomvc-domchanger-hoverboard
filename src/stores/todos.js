var Hoverboard = require('hoverboard');

var TodoStore = Hoverboard({
    getInitialState: function() {
        return {
            todos: []
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

    onClearCompleted: function() {
        var originalTodos = this.state.todos.slice(0);
        var newTodos = originalTodos.filter(function(item) {
            return !item.done;
        });

        console.log(newTodos);

        this.setState({ todos: newTodos });
    },
});

module.exports = TodoStore;
