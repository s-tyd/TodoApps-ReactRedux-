import { connect } from 'react-redux';
import { groupActions } from '../actions/groupActions';
import SideArea from '../components/sideArea';


const mapStateToProps = (state) => {
    return {
        groupList: state.groupReducer.groupList,
        groupCount: state.groupReducer.groupCount
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddGroup: (data, groupId) => {
            dispatch(groupActions.addGroup(data, groupId));
        },
        onSelectGroup: (id) => {
            dispatch(groupActions.selectGroup(id));
        },
        onEditGroup: (id, groupName) => {
            dispatch(groupActions.editGroup(id, groupName));
        },
        onDeleteGroup: (id) => {
            dispatch(groupActions.deleteGroup(id));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SideArea)