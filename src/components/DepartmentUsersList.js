import { connect } from 'react-redux';
import UsersView from './UsersView';
import { addUser, updateUser, setDepartmentFilter } from './actions';

const mapStateToProps = (state) => {
    return {
        users: state.users.filter((user) => {return user.department_id === state.departmentId}),
        departments: state.departments,
        departmentId: state.departmentId
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAddUser: (fio) => {
            dispatch(addUser(fio))
        },
        onUpdateUser: (fio, id, departmentId) => {
            dispatch(updateUser(fio, id, departmentId))
        },
        onSetDepartment: (id) => {
            dispatch(setDepartmentFilter(id))
        }
    }
};

const DepartmentUsersList = connect(mapStateToProps, mapDispatchToProps)(UsersView);

export default DepartmentUsersList;