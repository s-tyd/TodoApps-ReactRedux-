import { todoActionNames } from '../actions/todoActions';
import { groupActionNames } from '../actions/groupActions';
import { combineReducers } from 'redux';
import _ from 'lodash';

const groupInitState = {
    groupList: [
        {
            id: 'inbox',
            label: '受信箱'
        },
        {
            id: 'group-1',
            label: 'グループ1'
        }
    ],
    groupCount: 1,
    selectedGroup: 'inbox'
}

const todoInitState = {
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
    todoCount: 4
}


function todoReducer(state = todoInitState, action) {
    let _state = _.cloneDeep(state);
    let todoList = {};
    switch (action.type) {
        case todoActionNames.ADD_TODO:
            _state.todoCount++;
            todoList = _state.todoList[action.payload.selectedGroup];
            let todoItem = {
                id: 'item-' + _state.todoCount,
                label: action.payload.label,
                completed: false
            }
            todoList.push(todoItem);
            return _state;

        case todoActionNames.COMPLETE_TODO:
            todoList = _state.todoList[action.payload.selectedGroup];
            for (let i = 0; i < todoList.length; i++) {
                if (todoList[i].id == action.payload.id) {
                    todoList[i].completed = true
                    break;
                }
            }
            return _state;

        case todoActionNames.DELETE_TODO:
            todoList = _state.todoList[action.payload.selectedGroup];
            for (let i = 0; i < todoList.length; i++) {
                if (todoList[i].id == action.payload.id) {
                    todoList.splice(i, 1);
                    break;
                }
            }
            return _state;

        case groupActionNames.ADD_GROUP:
            _state.todoList[action.payload.groupId] = [];
            return _state;

        default:
            return state;
    }



}

function groupReducer(state = groupInitState, action) {
    let _state = _.cloneDeep(state);
    switch (action.type) {
        case groupActionNames.ADD_GROUP:
            _state.groupCount++;
            let groupItem = {
                id: action.payload.groupId,
                label: action.payload.data
            }
            _state.groupList.push(groupItem);
            return _state;

        case groupActionNames.SELECT_GROUP:
            _state.selectedGroup = action.payload.id;
            return _state;

        case groupActionNames.EDIT_GROUP:
            for (let i = 0; i < _state.groupList.length; i++) {
                if (_state.groupList[i].id == action.payload.id) {
                    _state.groupList[i].label = action.payload.groupName;
                    break;
                }
            }
            return _state;

        case groupActionNames.DELETE_GROUP:
            for (let i = 0; i < _state.groupList.length; i++) {
                if (_state.groupList[i].id == action.payload.id) {
                    _state.groupList.splice(i, 1);
                    break;
                }
            }
            delete _state.todoList[action.payload.id];
            if (_state.selectedGroup == action.payload.id) {
                _state.selectedGroup = _state.groupList[0].id;
            }
            return _state;

        default:
            return state;
    }
}

const reducer = combineReducers({
    todoReducer,
    groupReducer
})

export default reducer;