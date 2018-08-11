import {SORT_CONTACTS} from "../actions/sort.action";
import sort from './sort.reducer';

describe('Sort ', function () {
    test('should return the sort obj passed', () => {
        const fieldOrder = {
            field: 'firstName',
            order: 'asc'
        };
        expect(sort({}, {type: SORT_CONTACTS, fieldOrder})).toEqual(fieldOrder);
    });
});
