import {FILTER_CONTACTS} from "../actions/filter.action";
import {contactInfo} from "../contact-info";

const defaultState = contactInfo && contactInfo.filter ? contactInfo.filter : {};

const filters = (state = defaultState, action) => {
    switch (action.type) {
        case FILTER_CONTACTS:
            return action.filter;
        default:
            return state;
    }
};

export default filters;
