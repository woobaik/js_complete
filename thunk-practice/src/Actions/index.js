import jsonPlaceHolder from '../Apis/jsonPlaceHolder';

export const fectchPosts = () => async (dispatch) => {
        const response = await jsonPlaceHolder.get('/posts')

        dispatch({ type: 'FETCH_POSTS', payload: response})
}
