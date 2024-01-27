import { combineReducers } from 'redux';
import valueReducers  from './valueReducers';

const reducers=combineReducers({
    value:valueReducers
});

export default reducers;