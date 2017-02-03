const DEPARTMENTS = [
    {'name':'Каф.1', 'id':1},
    {'name':'Каф.2', 'id':2},
    {'name':'Каф.3', 'id':3}
];

const USERS = [
    {'name':'User 1', 'id':1, 'department_id': 1},
    {'name':'User 2', 'id':2, 'department_id': 1},
    {'name':'User 3', 'id':3, 'department_id': 1},
    {'name':'User 4', 'id':4, 'department_id': 2},
    {'name':'User 5', 'id':5, 'department_id': 2},
];

export function journalApp(state, action) {
    if (typeof state === 'undefined') {
        // начальное состояние
        return {
            users: USERS,
            departments: DEPARTMENTS,
            departmentId: DEPARTMENTS[0].id
        };
    }

    switch (action.type) {
        case 'ADD_USER':
            return Object.assign({}, state, {
                users: [
                    ...state.users,
                    {
                        name: action.fio,
                        id: ++state.users.length,
                        department_id: state.departmentId
                    }
                ]
            });
        case 'UPDATE_USER':
            let userIndex = state.users.findIndex((val) => {return val.id === action.id});
            if (-1 === userIndex) {
                return state;
            }
            else {
                let users = state.users
                    .slice(0, userIndex)
                    .concat({
                        name: action.fio,
                        id: action.id,
                        department_id: action.departmentId
                    })
                    .concat(state.users.slice(userIndex + 1, state.users.length));
                return Object.assign({}, state, {
                    users: users
                });
            }
        case 'SET_DEPARTMENT_FILTER':
            return Object.assign({}, state, {departmentId: action.id});
        default:
            return state;
    }
}
