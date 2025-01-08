import { createStore } from 'redux';
import reducer from './ReducerEcommerce';

const store = createStore(reducer);

export default store;