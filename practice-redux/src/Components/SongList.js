import React from 'react';
import { connect } from 'react-redux';
import SongDetail from './SongDetail';
import { selectSong } from '../Action';

const SongList = (props) => {
    const renderSongs = () => {
        return props.songs.map(song => {
            return (
                <div key={song.title}>
                    <div>{song.title}</div>
                    <div>{song.artist}</div>
                    <div>{song.duration}</div>
                    <button onClick={()=>props.selectSong(song)}>Select this song</button>
                    <br></br>
                </div>
                
            )
        })
    }
    return(
        <div>
            {renderSongs()}
            <SongDetail />
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        songs: state.songs
    }
}

export default connect(mapStateToProps, { selectSong })(SongList);