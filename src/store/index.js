import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import user from './user'

const reducers = combineReducers({
    user,
});

// preloadedState will be passed in by the plugin
export default preloadedState => {
    return createStore(reducers, preloadedState, applyMiddleware(thunk));
};