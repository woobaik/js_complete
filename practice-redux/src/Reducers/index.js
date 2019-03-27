import { combineReducers } from 'redux';

const songList = () => {
    return [
        {title: "Gangnam Style", artist: "Psy", duration: "3:12"},
        {title: "Tonight", artist: "Zico", duration: "3:52"},
        {title: "Don't stop me now!", artist: "Queen", duration: "5:24"}
    ]
}

const selectedSong = (selectedSong=null, action) => {
    if (action.type === 'SELECT_SONG') {
        return action.payload
    }
    return selectedSong
};

export default combineReducers({
    songs: songList,
    song: selectedSong
}) 