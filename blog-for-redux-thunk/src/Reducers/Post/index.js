const fetchPostList = (postList=[], action) => {
    if (action.type === 'FETCH_POST') {
        return action.payload
    }

    return postList
}

export default fetchPostList;