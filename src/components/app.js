var TodoList = require('./todo-list');
var TodoStore = require('../stores/todos');

function App(emit, refresh) {
    return { render: render };

    function render(store) {
        return ['div',
            ['h3', 'Todo'],

            // Todo list component
            store.todos.length > 0
                ? [TodoList, store.todos]
                : ['p', 'No todos!'],

            // Form to create new item
            ['form', { onsubmit: addItem },
                ['input', {
                    onkeyup: TodoStore.updateText,
                    value: store.text
                }],
                ['button', 'Add']
            ],

            // Clear completion
            ['p',
                ['a', {
                    href: '#',
                    onclick: clearCompleted
                }, 'Clear completed tasks']
            ],
        ];
    }

    function addItem(ev) {
        ev.preventDefault();
        TodoStore.addTodo();
    }

    function clearCompleted(ev) {
        ev.preventDefault();
        TodoStore.clearCompleted();
    }
}

module.exports = App;
