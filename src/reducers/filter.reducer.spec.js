import {FILTER_CONTACTS, applyFilter} from "../actions/filter.action";
import filters from './filters.reducer';

describe('Filters', function () {
    const filter = {
        firstName: 'xxxx',
        phone: {
            code: 'xx'
        }
    };
    test('Selected filters get stored in the state', () => {
       expect(filters({}, {type: FILTER_CONTACTS, filter})).toEqual(filter);
    });
});
