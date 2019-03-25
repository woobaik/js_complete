import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongList extends Component {

    renderSongs() {
        return this.props.songs.map( song => {
            return ( <div key={song.title}>
                        <div>Title : {song.title}</div>
                        <div>Artist : {song.artist}</div>
                        <div>Duration : {song.duration}</div>
                        <button>
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
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {songs : state.songs};
}


export default connect(mapStateToProps)(SongList);