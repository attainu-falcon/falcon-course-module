import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';

function configureStore() {
    const initialState = {};
    return createStore(rootReducer);
}

export default configureStore;