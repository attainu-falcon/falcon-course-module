import { combineReducers } from 'redux';
import videosReducer from './videosReducer';
import commentsReducer from './commentsReducer';

export default combineReducers({
    videosReducer,
    commentsReducer
});
