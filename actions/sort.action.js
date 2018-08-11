export const SORT_CONTACTS = 'SORT_CONTACTS';

export function sortContacts(field) {
    return {
        type: SORT_CONTACTS,
        field
    }
}
