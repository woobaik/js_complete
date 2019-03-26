import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions/index';
import SongDetail from './SongDetail';

class SongList extends Component {
    renderSongs() {
        return this.props.songs.map( song => {
            return ( <div key={song.title}>
                        <div>Title : {song.title}</div>
                        <div>Artist : {song.artist}</div>
                        <div>Duration : {song.duration}</div>
                        <button onClick={() => this.props.selectSong(song)}>
                            Select Song
                        </button>
                        <br />
                        <br />
                    </div>
                )
        })
    }
    
    render() {
        return (
            <div>
                {this.renderSongs()}
                <SongDetail />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {songs : state.songs};
}


export default connect(mapStateToProps, { selectSong })(SongList);