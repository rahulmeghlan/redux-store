import store from './store';
import {applyFilter} from './actions/filter.action';
import {sortContacts} from './actions/sort.action';
import {addContact} from './actions/add.action';

function updateContactInfo() {
    localStorage.setItem('contactInfo', JSON.stringify(store.getState()));
}

export const unsubscribe = store.subscribe(() => {
    updateContactInfo();
});

export function saveFilter(filters) {
    store.dispatch(applyFilter(filters));
}

export function saveSortData(sortObj) {
    store.dispatch(sortContacts(sortObj));
}

export function saveContact(contact) {
    store.dispatch(addContact(contact));
}

export function getContactInfo() {
    return localStorage.getItem('contactInfo') !== null ? JSON.parse(localStorage.getItem('contactInfo')) : {
        contactList: [],
        filters: '',
        sort: {}
    };
}
