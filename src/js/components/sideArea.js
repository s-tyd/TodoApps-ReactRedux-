import React from 'react';
import ReactDOM from 'react-dom';
import AddGroupDialog from './addGroupDialog'
import EditGroupDialog from './editGroupDialog'

export default class SideArea extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showAddGroupDialog: false,
            showEditGroupDialog: false
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
        console.log(groupName);
        this.props.onAddGroup(groupName);
        this.setState({ showAddGroupDialog: false });
    }
    onCancelAddGroupDialog(event) {
        this.setState({ showAddGroupDialog: false });
    }

    onSaveEditGroupDialog(groupName) {
        this.setState({ showEditGroupDialog: false })
    }
    onCancelEditGroupDialog() {
        this.setState({ showEditGroupDialog: false })
    }
    onDeleteEditGroupDialog(id) {
        this.setState({ showEditGroupDialog: false })
    }
    onClickGroupEdit(event) {
        this.setState({ showEditGroupDialog: true })
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
                    {group.label}
                    </span>
                    <button className='group-edit-button'
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
                    onSave={this.onSaveEditGroupDialog.bind(this)}
                    onCancel={this.onCancelEditGroupDialog.bind(this)}
                    onDelete={this.onDeleteEditGroupDialog.bind(this)}
                />

            </div>
        )
    }
}
