import {UPDATE_CONTACT, updateContact} from "./update.action";

const uniqid = require('uniqid');

describe('Update Action', () => {
    test('should update a contact to the store', () => {
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
            type: UPDATE_CONTACT,
            contact
        };
        expect(updateContact(contact)).toEqual(expectAction);
    });
});
