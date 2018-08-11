import {FILTER_CONTACTS} from "../actions/filter.action";

const filters = (state = {}, action)=>{
  switch (action.type) {
      case FILTER_CONTACTS:
          return action.filter;
      default:
          return state;
  }
};

export default filters;
