export const FILTER_CONTACTS = 'FILTER_CONTACTS';

export function applyFilter(filter) {
    return {
        type: FILTER_CONTACTS,
        filter
    }
}


