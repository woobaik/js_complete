// ACTION CREATOR
export const selectSong = (song) => { 
    //RETURN AN ACTION
    return {
        type: "SELECT_SONG",
        payload: song
    }
}

