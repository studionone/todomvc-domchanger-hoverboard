var TodoList = require('./todo-list');
var Footer = require('./footer');
var TodoStore = require('../stores/todos');

function App(emit, refresh) {
    return { render: render };

    function render(store) {
        return ['div',
            ['header', { 'class': 'header' },
                ['h1', 'todos'],
                // Form to create new item
                ['form', { onsubmit: addItem },
                    ['input', {
                        'class': 'new-todo',
                        'placeholder': 'What needs to be done?',
                        'onkeyup': TodoStore.updateText,
                        'value': store.text,
                        'autofocus': '',
                    }],
                ]
            ],
            ['section', { 'class': 'main' },
                // Clear completion
                ['input', {
                    'onclick': clearCompleted,
                    'class': 'toggle-all',
                    'type': 'checkbox',
                    'checked': hasCompleted(store.todos) ? 'checked' : false,
                }],
                ['label', { 'for': 'toggle-all' }, 'Mark all as complete'],

                // Todo list component
                store.todos.length > 0
                    ? [TodoList, store.todos] : [],

                // Footer
                store.todos.length > 0
                    ? [Footer, store.todos] : [],
            ]
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

    function hasCompleted(todos) {
        return todos.some(function(item) {
            if (item.done === true) {
                // This lets us refresh the view after the result has been returned
                setTimeout(refresh, 0);
                return true;
            }

            return false;
        });
    }
}

module.exports = App;
