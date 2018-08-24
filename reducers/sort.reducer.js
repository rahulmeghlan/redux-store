import {SORT_CONTACTS} from "../actions/sort.action";
import {contactInfo} from "../utilites/store-utilities";

const defaultState = contactInfo && contactInfo.sort ? contactInfo.sort : {};

const sort = (state = defaultState, action) => {
  switch (action.type) {
      case SORT_CONTACTS:
          return action.field;
      default:
          return state;
  }
};

export default sort;
