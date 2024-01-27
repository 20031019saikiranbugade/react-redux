import {createStore} from 'redux';
import Reducers from './Reducers/AmountReducer';

const store=createStore(Reducers);

export default store;