import {FILTER_CONTACTS} from "../actions/filter.action";
import {contactInfo} from "../utilites/store-utilities";

const defaultState = contactInfo && contactInfo.filters ? contactInfo.filters : '';

const filters = (state = defaultState, action) => {
    switch (action.type) {
        case FILTER_CONTACTS:
            return action.filter;
        default:
            return state;
    }
};

export default filters;
