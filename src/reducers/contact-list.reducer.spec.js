import {ADD_CONTACT} from "../actions/add.action";
import contactList from './contact-list.reducer';
import {UPDATE_CONTACT} from "../actions/update.action";

const uniqid = require('uniqid');
const contact = {
    id: uniqid(),
    firstName: 'Rahul',
    lastName: 'Meghlan',
    phone: {
        code: 'xx',
        number: 'xxxx'
    },
    address: {
        street: 'xxxx',
        state: 'xxxx',
        pin: 'xxxx',
        country: 'xxxx'
    }
};
describe('contact-list reducer', function () {
    test('should return the initial state', () => {
        expect(contactList([], {})).toEqual([]);
    });

    test('should add a contact to the state', () => {
        expect(contactList([], {type: ADD_CONTACT, contact})).toEqual([contact]);
    });


    test('should update the contact matching the id', () => {
        const expectedContact = {
            id: contact.id,
            firstName: 'Rahul',
            lastName: 'Meghlan',
            phone: {
                code: 'yy',
                number: 'xxxx'
            },
            address: {
                street: 'xxxx',
                state: 'xxxx',
                pin: 'xxxx',
                country: 'xxxx'
            }
        };
        expect(contactList([contact], {type: UPDATE_CONTACT, contact: expectedContact})).toEqual([expectedContact]);
    });
});
