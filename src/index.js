import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import App from './components/app';

const store = createStore(reducer);

const root = document.getElementById('root');

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	root);