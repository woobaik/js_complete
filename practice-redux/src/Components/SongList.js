import React from 'react';
import { connect } from 'react-redux';

const SongList = (props) => {

    const renderSongs = () => {
        return props.songs.map(song => {
            return (
                <div>
                    <div>{song.title}</div>
                    <div>{song.artist}</div>
                    <div>{song.duration}</div>
                    <button>Select this song</button>
                    <br></br>
                </div>
                
            )
        })
    }
    return(
        <div>{renderSongs()}</div>
    )
}

const mapStateToProps = (state) => {
    return {
        songs: state.songs
    }
}

export default connect(mapStateToProps)(SongList);