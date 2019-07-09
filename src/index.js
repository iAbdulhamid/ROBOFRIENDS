import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Containers/App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';


// Implementing REDUX:
// step 03: a)...
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {searchRobots} from './reducers';
// b) passing the rootReducer to createStore function ...
const store = createStore(searchRobots);



// c) passing the store to our App through the {Provider}...
ReactDOM.render(
    <Provider store = {store}>
        <App/>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
