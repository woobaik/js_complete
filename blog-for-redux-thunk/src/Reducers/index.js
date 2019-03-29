import { combineReducers } from 'redux';
import fetchPostList from './Post'

export default combineReducers(
    { posts: fetchPostList }
)