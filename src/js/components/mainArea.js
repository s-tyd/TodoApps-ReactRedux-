import React from 'react';
import Header from './header';
import Footer from './footer';
import ListItem from './listItem';


export default class MainArea extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: [
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
            todoInputValue: ''
        }
    }
    onChangeTodoInput(event) {
        // console.log('kig',event.target.value);
        this.setState({ todoInputValue: event.target.value });
    }


    onClickAddButton(event) {
        // console.log('kig');
        let addItem = { label: this.state.todoInputValue };
        let todos = this.state.todos.slice();
        todos.push(addItem);

        this.setState({
            todos: todos,
            todoInputValue: ""
        });
    }

    onCompleteTodo(id) {
        console.log('onCompleteTodo', id);
        let _state = Object.assign({}, this.state);
        for (let i = 0; i < _state.todos.length; i++) {
            if (_state.todos[i].id == id) {
                _state.todos[i].completed = true;
            }
            break;
        }
        this.setState(_state);
    }

    onDeleteTodo(id) {
        let _state = Object.assign({}, this.state);
        for (let i = 0; i < _state.todos.length; i++) {
            if (_state.todos[i].id == id) {
                _state.todos[i].completed = true;
            }
            _state.todos.splice(i,1);
            break;
        }
        this.setState(_state);
    }

    renderTodoItems() {
        let todoItemDom = [];
        for (let i = 0; i < this.state.todos.length; i++) {
            if (!this.state.todos[i].completed) {
                let todoItem =
                    <ListItem
                        key={'item-' + i}
                        data={this.state.todos[i]}
                        completeTodo={this.onCompleteTodo.bind(this)}
                        deleteTodo={this.onDeleteTodo.bind(this)}
                    />;
                todoItemDom.push(todoItem);
            }
        }
        return todoItemDom
    }

    render() {
        return (
            <div className='main-area'>
                <Header />
                <main className='list-area'>
                    <div className='todo-input-area'>
                        <input type='text'
                            className='todo-input'
                            placeholder='Todoを追加'
                            value={this.state.todoInputValue}
                            onChange={this.onChangeTodoInput.bind(this)} />
                        <button className='add-button'
                            onClick={this.onClickAddButton.bind(this)}>登録</button>
                    </div>

                    <ul className='todo-list'>
                        {this.renderTodoItems()}
                    </ul>
                </main>
                <Footer />
            </div>
        )
    }
}

