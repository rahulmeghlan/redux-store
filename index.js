import {createStore} from 'redux';
import contactStore from './reducers';



/**
 * @example: Following example states the way to dispatch and listen to state updates,
 * to be used by the consumer of this module.
 *
 const store = createStore(contactStore);
 const unscubscribe = store.subscribe(() => {
    console.log("Subscriber: ", store.getState());
});


store.dispatch(addContact({//obj goes here}));


unscubscribe();
*/
