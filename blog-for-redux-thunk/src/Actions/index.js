import { jsonPlaceholder }  from '../Apis/jsonPlaceholder';

export const fetchPost = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts')

    dispatch({type: 'FETCH_POST', payload: response.data})
}

