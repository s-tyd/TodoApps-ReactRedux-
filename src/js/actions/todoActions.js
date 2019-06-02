export const todoActionNames = {
    ADD_TODO: 'ADD_TODO',
    COMPLETE_TODO: 'COMPLETE_TODO',
    DELETE_TODO: 'DELETE_TODO'
}

export const todoActions = {
    addTodo: (data) => {
        return {
            type: todoActionNames.ADD_TODO,
            payload: {
                data: data
            }
        }
    },
    completeTodo: (id) => {
        return {
            type: todoActionNames.COMPLETE_TODO,
            payload: {
                id: id
            }
        }
    },
    deleteTodo: (id) => {
        return {
            type: todoActionNames.DELETE_TODO,
            payload: {
                id: id
            }
        }
    }
}