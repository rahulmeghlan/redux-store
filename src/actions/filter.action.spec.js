import {applyFilter, FILTER_CONTACTS} from "./filter.action";

describe('Filter Action', function () {
    test('it should return a filter with action type: ' + FILTER_CONTACTS, () => {
        const filter = {
            firstName: 'xxxx',
            phone: {
                code: 'xx'
            }
        };
        const expectAction = {
            type: FILTER_CONTACTS,
            filter
        };
        expect(applyFilter(filter)).toEqual(expectAction);
    });
});
