import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { journalApp } from './components/reducers';
import DepartmentUsersList from './components/DepartmentUsersList';

let store = createStore(journalApp);

ReactDOM.render(
    <Provider store={store}>
        <DepartmentUsersList />
    </Provider>,
    document.getElementById('root')
);
