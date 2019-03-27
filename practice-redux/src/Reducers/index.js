import { combineReducers } from 'redux';

const songList = () => {
    return [
        {title: "Gangnam Style", artist: "Psy", duration: "3:12"},
        {title: "Tonight", artist: "Zico", duration: "3:52"},
        {title: "Don't stop me now!", artist: "Queen", duration: "5:24"}
    ]
}

export default combineReducers({
    songs : songList
}) 