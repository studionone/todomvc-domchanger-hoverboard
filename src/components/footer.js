var TodoStore = require('../stores/todos');

function Footer() {
    return { render: render };

    function render(todos) {
        return ['footer', { 'class': 'footer'},
            ['span', {'class': 'todo-count'},
                ['strong', calcRemaining(todos)], ' items left'],
            ['ul', {'class': 'filters'},
                ['li',
                    ['a', {'class': 'selected', 'href': '#/'}, 'All']],
                ['li',
                    ['a', {'href': '#/active'}, 'Active']],
                ['li',
                    ['a', {'href': '#/completed'}, 'Completed']],],
            ['button', {
                    'class': 'clear-completed',
                    'onclick': handleClear,
                }, 'Clear completed'],];
    }

    function handleClear(ev) {
        ev.preventDefault();
        TodoStore.clearCompleted();
    }

    function calcRemaining(todos) {
        return todos.filter(function(item) {
            if (item.done === false) {
                return item;
            }
        }).length;
    }
}

module.exports = Footer;
