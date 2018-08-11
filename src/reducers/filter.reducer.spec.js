import {FILTER_CONTACTS} from "../actions/filter.action";
import filters from './filters.reducer';
const filter = {
    firstName: 'xxxx',
    phone: {
        code: 'xx'
    }
};
describe('Filters', function () {

    test('Return default state if no action provided', () => {
        expect(filters({}, {})).toEqual({});
    });

    test('Return default state if wrong action provided', () => {
        expect(filters({}, {type: 'NO_ACTION_TYPE', filter})).toEqual({});
    });

    test('Selected filters get stored in the state', () => {
        expect(filters({}, {type: FILTER_CONTACTS, filter})).toEqual(filter);
    });
});
