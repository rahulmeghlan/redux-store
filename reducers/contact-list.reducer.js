import {ADD_CONTACT} from '../actions/add.action';
import {UPDATE_CONTACT} from '../actions/update.action';
import {contactInfo} from "../utilites/store-utilities";

const defaultState = contactInfo && contactInfo.contactList.length ? contactInfo.contactList : [];

const contactList = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_CONTACT:
            return [...state, action.contact];
        case UPDATE_CONTACT:
            return state.map(contact => contact.id === action.contact.id ? action.contact : contact);
        default:
            return state;
    }
};

export default contactList;
