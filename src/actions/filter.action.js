export const FILTER_CONTACTS = 'FILTER_CONTACTS';

export function applyFilter(filter) {
    return {
        type: FILTER_CONTACTS,
        filter
    }
}


//const indexOf = (array, value, key) => array.reduce((a, b, idx) => (key ? b[key] === value : b[idx] === value) ? idx : a, -1);
