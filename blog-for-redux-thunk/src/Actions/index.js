import jsonPlacholder from '../Apis/jsonPlaceholder';

export const fetchPostList = () => async dispatch => {
    const response = await jsonPlacholder.get('/posts')

    dispatch({ type: 'FETCH_POST', payload: response.data})
}
