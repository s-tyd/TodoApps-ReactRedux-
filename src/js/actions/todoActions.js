export const todoActionNames = {
    ADD_TODO: 'ADD_TODO',
    COMPLETE_TODO: 'COMPLETE_TODO',
    DELETE_TODO: 'DELETE_TODO'
}

export const todoActions = {
    addTodo: (label, selectedGroup) => {
        return {
            type: todoActionNames.ADD_TODO,
            payload: {
                label: label,
                selectedGroup: selectedGroup
            }
        }
    },
    completeTodo: (id, selectedGroup) => {
        return {
            type: todoActionNames.COMPLETE_TODO,
            payload: {
                id: id,
                selectedGroup: selectedGroup
            }
        }
    },
    deleteTodo: (id, selectedGroup) => {
        return {
            type: todoActionNames.DELETE_TODO,
            payload: {
                id: id,
                selectedGroup: selectedGroup
            }
        }
    }
}