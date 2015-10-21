var TodoList = require('./todo-list');
var TodoStore = require('../stores/todos');

function App(emit, refresh) {
    var text = "";

    return { render: render };

    function render(items) {
        return ['div', 
            ['h3', 'Todo'],
            [TodoList, items],
            ['form', { onsubmit: addItem },
                ['input', {
                    onchange: onChange,
                    value: text
                }],
                ['button', 'Add']
            ]
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
}

module.exports = App;
