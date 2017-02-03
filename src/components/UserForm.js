import React from 'react';

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
        let id = parseInt(event.target.value);
        this.setState({departmentId: id});
        this.props.onSetDepartment(id);
    }

    handleFIOChange(event) {
        this.setState({fio: event.target.value});
    }

    handleAddUser(event) {
        console.log(this.state);
        this.props.onAddUser(this.state.fio);
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

export default UserForm;