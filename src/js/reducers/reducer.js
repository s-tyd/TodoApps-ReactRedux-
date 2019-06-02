import { todoActionNames } from '../actions/todoActions';

const initialState = {
    groupList: [
        {
            id: 'inbox',
            label: '受信箱'
        },
        {
            id: 'group-1',
            label: 'グループ１'
        }
    ],
    todoList: {
        'inbox': [
            {
                id: 'item1',
                label: 'todo1',
                completed: false
            },
            {
                id: 'item2',
                label: 'todo2',
                completed: false
            },
            {
                id: 'item5',
                label: 'todo5',
                completed: false
            }
        ],
        'group-1': [
            {
                id: 'item3',
                label: 'todo3',
                completed: false
            },
            {
                id: 'item4',
                label: 'todo4',
                completed: false
            }
        ]
    },
    todoCount: 4,
    groupCount: 1,
    selectedGroup: 'inbox'
}



const reducer = (state = initialState, action) => {
    switch (action.type) {
        case todoActionNames.ADD_TODO:
            let _state = Object.assign({}, state);
            _state.todoCount++;
            let todoList = _state.todoList[_state.selectedGroup];
            let todoItem = {
                id: 'item-' + _state.todoCount,
                label: action.payload.data,
                completed: false
            }
            todoList.push(todoItem);
            return _state;

        default:
            return state;
    }

}
export default reducer;