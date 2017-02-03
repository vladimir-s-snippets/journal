import React from 'react';
import UserForm from './UserForm';
import UsersList from './UsersList';

class UsersView extends React.Component {
    render() {
        return (
            <div>
                <UserForm
                    departments={this.props.departments}
                    onAddUser={this.props.onAddUser}
                    onSetDepartment={this.props.onSetDepartment} />
                <UsersList
                    users={this.props.users}
                    onUpdateUser={this.props.onUpdateUser} />
            </div>
        );
    }
}

export default UsersView;