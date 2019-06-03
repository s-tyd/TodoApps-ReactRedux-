export const groupActionNames = {
    ADD_GROUP: 'ADD_GROUP',
    SELECT_GROUP: 'SELECT_GROUP',
    EDIT_GROUP: 'EDIT_GROUP',
    DELETE_GROUP: 'DELETE_GROUP'
}

export const groupActions = {
    addGroup: (data, groupId) => {
        return {
            type: groupActionNames.ADD_GROUP,
            payload: {
                data: data,
                groupId: groupId
            }
        }
    },
    selectGroup: (id) => {
        return {
            type: groupActionNames.SELECT_GROUP,
            payload: {
                id: id
            }
        }
    },
    editGroup: (id, groundName) => {
        return {
            type: groupActionNames.EDIT_GROUP,
            payload: {
                id: id,
                groundName: groundName
            }
        }
    },
    deleteGroup: (id) => {
        return {
            type: groupActionNames.DELETE_GROUP,
            payload: {
                id: id
            }
        }
    },

}