import { combineReducers } from 'redux';
import reducer from './reducerQuotes';
import Subscribers from './Subscribers';

const reducers = combineReducers({
    reducer,
    Subscribers
});

export default reducers;
