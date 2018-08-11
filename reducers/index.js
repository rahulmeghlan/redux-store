import {combineReducers} from 'redux';
import contactList from './contact-list.reducer';
import filters from './filters.reducer';
import sort from './sort.reducer';

const contactStore = combineReducers({
    contactList,
    filters,
    sort
});

export default contactStore;
