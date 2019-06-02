import React from 'react';
import ReactDOM from 'react-dom';
import AddGroupDialog from './addGroupDialog'
import EditGroupDialog from './editGroupDialog'

export default class SideArea extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showAddGroupDialog: false,
            showEditGroupDialog: false,
            selectedGroup: undefined
        }
    }
    onClickGroup(event) {
        let listItem = ReactDOM.findDOMNode(event.target);
        let id = listItem.dataset.id;
        this.props.onSelect(id);
    }

    onClickAddGroup(event) {
        this.setState({ showAddGroupDialog: true });
    }
    onSaveAddGroupDialog(groupName) {
        this.props.onAddGroup(groupName);
        this.setState({ showAddGroupDialog: false });
    }
    onCancelAddGroupDialog(event) {
        this.setState({ showAddGroupDialog: false });
    }

    onSaveEditGroupDialog(id, groupName) {
        this.props.onEditGroup(id, groupName);
        this.setState({ showEditGroupDialog: false })
    }
    onCancelEditGroupDialog() {
        this.setState({ showEditGroupDialog: false })
    }
    onDeleteEditGroupDialog(id) {
        this.setState({ showEditGroupDialog: false })
    }
    onClickGroupEdit(event) {
        let editButton = ReactDOM.findDOMNode(event.target);
        let id = editButton.dataset.id;
        let selectedGroup;
        for (let i = 0; i < this.props.groupList.length; i++) {
            if (this.props.groupList[i].id == id) {
                selectedGroup = this.props.groupList[i];
                break;
            }
        }
        this.setState({
            showEditGroupDialog: true,
            selectedGroup: selectedGroup
        })
    }

    renderGroup() {
        let groupListDom = [];
        for (let i = 0; i < this.props.groupList.length; i++) {
            let group = this.props.groupList[i];
            let groupItem =
                (<li key={group.id}>
                    <span
                        data-id={group.id}
                        onClick={this.onClickGroup.bind(this)}>
                        {group.label}</span>
                    <button
                        data-id={group.id}
                        className='group-edit-button'
                        onClick={this.onClickGroupEdit.bind(this)}>
                        編集
                    </button>
                </li>);
            groupListDom.push(groupItem);
        }
        return groupListDom;
    }

    render() {
        return (
            <div className='side-area'>
                <ul className='group-list'>
                    {this.renderGroup()}
                </ul>
                <div className='side-area-footer'>
                    <button
                        className='add-group-button'
                        onClick={this.onClickAddGroup.bind(this)}>グループ新規作成</button>
                </div>

                <AddGroupDialog
                    show={this.state.showAddGroupDialog}
                    onSave={this.onSaveAddGroupDialog.bind(this)}
                    onCancel={this.onCancelAddGroupDialog.bind(this)} />

                <EditGroupDialog
                    show={this.state.showEditGroupDialog}
                    group={this.state.selectedGroup}
                    onSave={this.onSaveEditGroupDialog.bind(this)}
                    onCancel={this.onCancelEditGroupDialog.bind(this)}
                    onDelete={this.onDeleteEditGroupDialog.bind(this)}
                />

            </div>
        )
    }
}
