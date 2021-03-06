import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './store/store';
import Quotes from './components/Quotes';

// const REACT_APP_DB_HOST = process.env.REACT_APP_DB_HOST;
// console.log(REACT_APP_DB_HOST);

ReactDOM.render(
  <Provider store={store}>
  <Router>
    <Route path="/" exact component={Quotes} />
  </Router>
  </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
