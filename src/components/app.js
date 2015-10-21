var TodoList = require('./todo-list');
var TodoStore = require('../stores/todos');

function App(emit, refresh) {
    var text = "";

    return { render: render };

    function render(items) {
        return ['div',
            ['h3', 'Todo'],

            // Todo list component
            items.length > 0
                ? [TodoList, items]
                : ['p', 'No todos!'],

            // Form to create new item
            ['form', { onsubmit: addItem },
                ['input', {
                    onkeyup: onChange,
                    value: text
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

    function onChange(ev) {
        text = ev.target.value;
    }

    function addItem(ev) {
        ev.preventDefault();

        TodoStore.addTodo(text);
        text = "";
        refresh();
    }

    function clearCompleted(ev) {
        ev.preventDefault();
        TodoStore.clearCompleted();
        refresh();
    }
}

module.exports = App;
