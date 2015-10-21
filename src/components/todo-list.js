var TodoStore = require('../stores/todos');

function TodoList() {
    return { render: render }

    function render(items) {
        return ['ul',
            items.map(function(item, index) {
                return ['li', {
                    'onclick': toggleComplete,
                    'data-index': index
                }, item.done ? ['del', item.text] : ['span', item.text]]
            })];
    }

    function toggleComplete(ev) {
        TodoStore.toggleCompletion(ev.target.parentNode.dataset.index);
    }
}

module.exports = TodoList;
