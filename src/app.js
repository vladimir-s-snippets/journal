import React from 'react';
import ReactDOM from 'react-dom';

class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            departmentId: props.departments[0].id,
            fio: ''
        };
        this.handleDepartmentChange = this.handleDepartmentChange.bind(this);
        this.handleFIOChange = this.handleFIOChange.bind(this);
        this.handleAddUser = this.handleAddUser.bind(this);
    }

    handleDepartmentChange(event) {
        this.setState({departmentId: parseInt(event.target.value)});
    }

    handleFIOChange(event) {
        this.setState({fio: event.target.value});
    }

    handleAddUser(event) {
        console.log(this.state);
        event.preventDefault();
    }

    render() {
        let departments = this.props.departments.map((department) => {
            return (<option key={department.id} value={department.id}>{department.name}</option>);
        });
        return (
            <form>
                <p>
                    <select value={this.state.departmentId} onChange={this.handleDepartmentChange}>
                        {departments}
                    </select>
                </p>
                <p>
                    <input type="text" placeholder="FIO" value={this.state.fio} onChange={this.handleFIOChange} />
                    <button onClick={this.handleAddUser}>Добавить пользователя</button>
                </p>
            </form>
        );
    }
}

class UserRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fio: props.user.name
        };

        this.switchToEdit = this.switchToEdit.bind(this);
        this.switchToView = this.switchToView.bind(this);
        this.updateFIO = this.updateFIO.bind(this);
    }

    switchToEdit(event) {
        this.props.openEditorHandle(this.props.user.id);
        event.preventDefault();
    }

    switchToView(event) {
        this.props.closeEditorHandle(this.props.user.id);
        event.preventDefault();
    }

    updateFIO(event) {
        this.setState({fio: event.target.value});
    }

    render() {
        if (this.props.mode === 'EDIT') {
            return (
                <li data-id={this.props.user.id}>
                    <input type="text" value={this.state.fio} onChange={this.updateFIO} />
                    <button onClick={this.switchToView}>Сохранить</button>
                </li>
            );
        }
        else {
            return (
                <li data-id={this.props.user.id} onClick={this.switchToEdit}>{this.state.fio}</li>
            );
        }
    }
}

class UsersList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {editorId: null};
        this.openEditor = this.openEditor.bind(this);
        this.closeEditor = this.closeEditor.bind(this);
    }

    openEditor(id) {
        this.setState({editorId: id});
    }

    closeEditor(id) {
        this.setState((prevState, props) => {
            if (id === prevState.editorId) {
                return {editorId: null};
            }
            else {
                return prevState;
            }
        });
    }

    render() {
        let rows = this.props.users.map((user) => {
            let mode = 'VIEW';
            if (this.state.editorId === user.id) {
                mode = 'EDIT';
            }
            return (
                <UserRow
                    key={user.id}
                    user={user}
                    mode={mode}
                    openEditorHandle={this.openEditor}
                    closeEditorHandle={this.closeEditor}
                />
            );
        });
        return (
            <ul>
                {rows}
            </ul>
        );
    }
}

class UsersView extends React.Component {
    render() {
        return (
            <div>
                <UserForm departments={this.props.departments} />
                <UsersList users={this.props.users} />
            </div>
        );
    }
}

const DEPARTMENTS = [
    {'name':'Каф.1', 'id':1},
    {'name':'Каф.2', 'id':2},
    {'name':'Каф.3', 'id':3}
];

const USERS = [
    {'name':'User 1', 'id':1},
    {'name':'User 2', 'id':2},
    {'name':'User 3', 'id':3},
    {'name':'User 4', 'id':4},
    {'name':'User 5', 'id':5},
];

ReactDOM.render(
    <UsersView departments={DEPARTMENTS} users={USERS} />,
    document.getElementById('root')
);
