import { connect } from 'react-redux';
import { todoActions } from '../actions/todoActions';
import MainArea from '../components/mainArea';

function getGroupName(groupList, selectedGroup) {
    let groupName = ''
    for (let i = 0; i < groupList.length; i++) {
        if (groupList[i].id == selectedGroup) {
            groupName = groupList[i].label;
            break;
        }
    }
    return groupName;
}

const mapStateToProps = (state) => {
    return {
        groupName: getGroupName(state.groupReducer.groupList, state.groupReducer.selectedGroup),
        todoList: state.todoReducer.todoList[state.groupReducer.selectedGroup]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddTodo: (data) => {
            dispatch(todoActions.addTodo(data));
        },
        onCompleteTodo: (id) => {
            dispatch(todoActions.completeTodo(id));
        },
        onDeleteTodo: (id) => {
            dispatch(todoActions.deleteTodo(id));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainArea)