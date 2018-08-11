export const UPDATE_CONTACT = 'UPDATE_CONTACT';

export function updateContact(contact) {
    return {
        type: UPDATE_CONTACT,
        contact
    }
}
