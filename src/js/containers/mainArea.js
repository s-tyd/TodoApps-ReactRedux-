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
        groupName: getGroupName(state.groupList, state.selectedGroup),
        todoList: state.todoList[state.selectedGroup]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddTodo: (data) => {
            dispatch(todoActions.addTodo(data));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainArea)