import React from 'react';
import MainArea from './mainArea';
import SideArea from './sideArea';


export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
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
    }

    onAddTodo(label) {
        let _state = Object.assign({}, this.state);
        _state.todoCount++;
        let todoList = _state.todoList[_state.selectedGroup];
        let todoItem = {
            id: 'item-' + _state.todoCount,
            label: label,
            completed: false
        }
        todoList.push(todoItem);
        this.setState(_state);
    }

    onCompleteTodo(id) {
        let _state = Object.assign({}, this.state);
        let todoList = _state.todoList[_state.selectedGroup];
        for (let i = 0; i < todoList.length; i++) {
            if (todoList[i].id == id) {
                todoList[i].completed = true
                break;
            }
        }
        this.setState(_state);
    }

    onDeleteTodo(id) {
        let _state = Object.assign({}, this.state);
        let todoList = _state.todoList[_state.selectedGroup];
        for (let i = 0; i < todoList.length; i++) {
            if (todoList[i].id == id) {
                todoList.splice(i, 1);
                break;
            }
        }
        this.setState(_state);
    }

    onAddGroup(groupName) {
        let _state = Object.assign({}, this.state);
        _state.groupCount++;
        let groupId = 'group-' +_state.groupCount;
        let groupItem = {
            id: groupId,
            label: groupName
        }
        _state.groupList.push(groupItem);
        _state.todoList[groupId]=[];
        this.setState(_state);
    }


    onSelectGroup(id) {
        console.log('onselectgroup', id);
        this.setState({ selectedGroup: id })
    }


    render() {
        return (
            <div className='wrap'>
                <SideArea
                    groupList={this.state.groupList}
                    onSelect={this.onSelectGroup.bind(this)}
                    onAddGroup={this.onAddGroup.bind(this)}
                />
                <MainArea
                    todoList={this.state.todoList[this.state.selectedGroup]}
                    onAddTodo={this.onAddTodo.bind(this)}
                    onCompleteTodo={this.onCompleteTodo.bind(this)}
                    onDeleteTodo={this.onDeleteTodo.bind(this)}
                />
            </div>
        )
    }
}