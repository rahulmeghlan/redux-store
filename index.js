import {createStore} from 'redux';
import contactStore from './reducers';

const store = createStore(contactStore);
export default store;

/**
 * @example: Following example states the way to dispatch and listen to state updates,
 * to be used by the consumer of this module.
 *
 const unscubscribe = store.subscribe(() => {
    console.log("Subscriber: ", store.getState());
});


 store.dispatch(addContact({//obj goes here}));


 unscubscribe();
 */
