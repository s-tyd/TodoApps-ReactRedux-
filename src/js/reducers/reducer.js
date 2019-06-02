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



const reducer = (state, action) => {

    return state;
    // switch (action.type) {
    //     case 'CHANGE_TEXT':
    //         return Object.assign({}, state, { text: action.text });
    //     default:
    //         return state;
    // }
}
export default reducer;

// = { text: 'text' }