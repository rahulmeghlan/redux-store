import {createStore} from 'redux';
import contactStore from './reducers';

const store = createStore(contactStore);

export default store;
