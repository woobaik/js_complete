import React from 'react'
import { connect } from 'react-redux';

class SongDetail extends React.Component {
    render() {
        return(
            !(this.props.song) ? <div>Loading</div> : <div>{this.props.song.title}</div>
        )
        
    }
}

const mapStateToProps = (state) => {

    return {song : state.selectedSong }
}

export default connect(mapStateToProps)(SongDetail);