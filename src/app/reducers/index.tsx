import { combineReducers } from 'redux';
import counter from './Counter.reducer';

export default combineReducers({
    sample: counter
});
