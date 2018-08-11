import {ADD_CONTACT, addContact} from "./add.action";
const uniqid = require('uniqid');

describe('Add Action', () => {
    test('should add a contact to the store', () => {
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
        const expectAction = {
            type: ADD_CONTACT,
            contact
        };
        expect(addContact(contact)).toEqual(expectAction);
    });
});
