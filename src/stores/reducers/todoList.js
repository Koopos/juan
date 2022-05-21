
const initial = {
    data: ['ces']
}
const todoList = (state = initial, action) => {
    switch(action.type) {
        case 'TODOLIST_FINDALL':
            return {
                ...state
            }
            default: 
            return state;
    }
}

export default  todoList