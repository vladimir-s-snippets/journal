export function addUser(fio) {
    return {
        type: 'ADD_USER',
        fio: fio
    }
}

export function updateUser(fio, id, departmentId) {
    return {
        type: 'UPDATE_USER',
        fio: fio,
        id: id,
        departmentId: departmentId
    }
}

export function setDepartmentFilter(id) {
    return {
        type: 'SET_DEPARTMENT_FILTER',
        id: id
    }
}