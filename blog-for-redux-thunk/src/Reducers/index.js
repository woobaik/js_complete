import { combineReducers } from 'redux';

const fectchPostList = (defaultList=[],action) => {
    if (action.type === 'FETCH_POST') {
        return action.payload
    }
    
    return defaultList
}

export default combineReducers({
    fectchPostList: fectchPostList
})