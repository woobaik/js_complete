import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../Actions';


class PostList extends Component {
    componentDidMount() {
        console.log(this.props)
        this.props.fetchPost()
    }
    render() {
        return(
            <div>Hi</div>
        )
    }
};

const mapToStateToProps = (state) => {
    return state
}

export default connect(mapToStateToProps, { fetchPost })(PostList)



