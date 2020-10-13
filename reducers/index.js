import content from './content';
import user from './user';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({ content, user });

export default rootReducer;
