import { combineReducers } from 'redux';
import videosReducer from './videosReducer';
import commentsReducer from './commentsReducer';
import loginReducer from './loginReducer';

export default combineReducers({
    videosReducer,
    commentsReducer,
    loginReducer
});