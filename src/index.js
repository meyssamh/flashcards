import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';

import App from './App';
import LibraryReducer from './store/reducers/LibraryReducer';
import CardsReducer from './store/reducers/CardsReducer';
import EditReducer from './store/reducers/EditReducer';
import './index.css';
import * as serviceWorker from './serviceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
    Library: LibraryReducer,
    Cards: CardsReducer,
    Edit: EditReducer
});

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

const root = (
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
);

render(root, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();