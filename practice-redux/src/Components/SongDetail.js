import React from 'react';
import { connect } from 'react-redux';

const SongDetail = () => {
    return(
        <div>
            SongDetail Component
        </div>
    )
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(SongDetail)