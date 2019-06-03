import { connect } from 'react-redux';
import { groupActions } from '../actions/groupActions';
import SideArea from '../components/sideArea';


const mapStateToProps = (state) => {
    return {
        groupList: state.groupReducer.groupList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddGroup: (data) => {
            dispatch(groupActions.addGroup(data));
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