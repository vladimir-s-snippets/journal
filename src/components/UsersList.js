import React from 'react';
import UserRow from './UserRow';

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
                    onUpdateUser={this.props.onUpdateUser}
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

export default UsersList;