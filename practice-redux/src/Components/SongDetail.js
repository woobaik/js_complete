import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({song}) => {
    if (!song) {
        return (
            <div>
                PLEASE SELECT A SONG
            </div>
        )
    }
    return(
        <div>
            Title: {song.title}
            <br />
            Artist: {song.artist}
            <br />
            Duration: {song.duration}
            <br />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {song: state.song}
}

export default connect(mapStateToProps)(SongDetail)