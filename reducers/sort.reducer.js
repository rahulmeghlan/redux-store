import {SORT_CONTACTS} from "../actions/sort.action";
import {contactInfo} from "../contact-info";

const defaultState = contactInfo && contactInfo.fieldOrder ? contactInfo.fieldOrder : {};

const sort = (state = defaultState, action) => {
  switch (action.type) {
      case SORT_CONTACTS:
          return action.fieldOrder;
      default:
          return state;
  }
};

export default sort;
