var TodoStore = require('../stores/todos');

function TodoList(emit, refresh) {
    return { render: render }

    function render(items) {
        return ['ul', items.map(function(item, index) {
            return ['li', { 
                'onclick': toggleComplete, 
                'data-index': index 
            }, (function() {
                if (item.done === true) {
                    return ['del', item.text];
                }

                return ['span', item.text];
            })()]
        })]
    }

    function toggleComplete(ev) {
        TodoStore.toggleCompletion(ev.target.parentNode.dataset.index);
    }
}

module.exports = TodoList;
