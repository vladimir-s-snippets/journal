import React from 'react';

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
        this.props.onUpdateUser(this.state.fio, this.props.user.id, this.props.user.department_id);
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

export default UserRow;