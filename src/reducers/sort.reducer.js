import {SORT_CONTACTS, sortContacts} from "../actions/sort.action";

const sort = (state = {}, action) => {
  switch (action.type) {
      case SORT_CONTACTS:
          return action.fieldOrder;
      default:
          return state;
  }
};

export default sort;
