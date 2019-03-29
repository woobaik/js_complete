import jsonPlacholder from '../Apis/jsonPlaceholder';

const fetchPostList = () => async dispatch => {
    const response = await jsonPlacholder.get('/posts')

    dispatch({ type: 'FETCH_POST', payload: response.data})
}

export default fetchPostList;