var Hoverboard = require('hoverboard');

var TodoStore = Hoverboard({
    getInitialState: function() {
        return {
            text: '',
            todos: [],
        };
    },

    getState: function(state) {
        // Done to avoid mutation of the state via refs
        return JSON.parse(JSON.stringify(state));
    },

    onAddTodo: function() {
        var newTodos = this.state.todos.slice(0);

        newTodos.push({
            text: this.state.text,
            done: false
        });

        this.setState({ text: '', todos: newTodos });
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

        this.setState({ todos: newTodos });
    },

    onUpdateText: function(ev) {
        var newState = JSON.parse(JSON.stringify(this.state));
        newState.text = ev.target.value;

        this.setState(newState);
    },
});

module.exports = TodoStore;
