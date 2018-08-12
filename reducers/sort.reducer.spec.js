import {SORT_CONTACTS} from "../actions/sort.action";
import sort from './sort.reducer';

describe('Sort ', function () {
    test('should return default state if no action passed', () => {
        expect(sort({}, {})).toEqual({});
    });

    test('should return the sort obj passed', () => {
        const field = {
            field: 'firstName',
            order: 'asc'
        };
        expect(sort({}, {type: SORT_CONTACTS, field})).toEqual(field);
    });
});
