
import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/store.js';
import App from './components/app.jsx';
import Root from './components/root.jsx';
// import allTodos from './reducers/selectors.js';
// import Root from './frontend/';
window.store = store;
// window.allTodos = allTodos;


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root store={store} />, document.getElementById('root'));
});
