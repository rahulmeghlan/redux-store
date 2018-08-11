export const ADD_CONTACT = 'ADD_CONTACT';


export function addContact(contact) {
    return {
        type: ADD_CONTACT,
        contact
    }
}
