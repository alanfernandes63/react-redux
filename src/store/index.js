import { createStore } from 'redux';
import todos from '../reducers/index';

const store = createStore(todos);

export default store;
