import {createStore} from 'redux';

const reducer = (state = 0, action) => {	

	switch (action.type) {
		case 'INC':
			return state + 1;

		case 'DEC':
			return state - 1;	

		default:
			return state;
	}
};

const store = createStore(reducer);

let myState = null;

store.subscribe(() => myState = store.getState());

store.dispatch({type: 'INC'});
store.dispatch({type: 'INC'});
store.dispatch({type: 'INC'});
store.dispatch({type: 'DEC'});

console.log(myState);