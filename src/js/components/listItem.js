import React from 'react';

export default class ListItem extends React.Component {
    onChangeCheckbox(event){
        console.log('test');
        this.props.completeTodo(event.target.value)
        // this.props.ListItem
    }
    onClickDeleteButton(event){
        this.props.deleteTodo(this.props.data.id);
    }

    render() {
        return (
            <li className='todo-list-item'>
                <input type='checkbox' 
                    value={this.props.data.id}
                    onChange={this.onChangeCheckbox.bind(this)}/>
                {this.props.data.label}
                <button
                className='delete-button'
                onClick={this.onClickDeleteButton.bind(this)}>x</button>
            </li>
        )
    }
}