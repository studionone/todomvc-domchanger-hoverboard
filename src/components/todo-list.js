var TodoStore = require('../stores/todos');

function TodoList(emit, refresh) {
    return { render: render }

    function render(items) {
        return ['ul', { 'class': 'todo-list' },
            items.map(function(item, index) {
                return ['li', {
                    'class': item.done ? 'completed' : '',
                    },
                ['div', {'class': 'view'},
                    ['input', {
                        'class': 'toggle',
                        'type': 'checkbox',
                        'checked': item.done ? 'checked' : false,
                        'onchange': function(ev) {
                            ev.preventDefault();
                            TodoStore.toggleCompletion(index);
                        },
                    }],
                    ['label', item.text],
                    ['button', {
                        'class': 'destroy',
                        'onclick': function(ev) {
                            ev.preventDefault();
                            TodoStore.handleDelete(index);
                        },
                    }]],
                ['input', { 'class': 'edit'}]]
            })];
    }
}

module.exports = TodoList;
