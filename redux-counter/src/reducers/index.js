import { combineReducers } from "redux";

const songReducer = () => {
    return [
        {title: 'No Women No Cry', duration: '7:16', artist: 'Bob Marley'},
        {title: 'Gangnam Style', duration: '4.50', artist: 'Psy'},
        {title: 'Zi Hago Sip Da', duration: '4:56', artist: 'Commander Zico'},
        {title: 'All Star', duration: '4:12', artist: 'Norah Jones'}
    ]
}

const selectedSongReducer = (selectedSong=null, action) => {
    return {
        if (action.type === 'SELECT_SONG') {
            return action.payload
        }
        return selectedSong
    }
};

export default combineReducers({
    songs: songReducer,
    selectedSong: selectedSongReducer
});