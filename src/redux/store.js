import { createStore, combineReducers, applyMiddleware } from 'redux';
import { getRepos } from '../reducers/repos';
import { promise, logger } from './middleware';

//get all reducers available
//global state come from here
const rootReducers = combineReducers({
	getRepos
});

const store = createStore(rootReducers, applyMiddleware(promise, logger));
export default store;
