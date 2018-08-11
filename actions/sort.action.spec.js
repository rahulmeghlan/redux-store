import {SORT_CONTACTS, sortContacts} from "./sort.action";

describe('Sort Contacts', function () {
    test('It should return sort object for contacts', () => {
        const field = {
            column: 'firstName',
            order: 'desc'
        };
        const expectedAction = {
            type: SORT_CONTACTS,
            field
        };
        expect(sortContacts(field)).toEqual(expectedAction);
    });
});
