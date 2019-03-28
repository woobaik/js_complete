import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../Actions';


class PostList extends Component {
    componentDidMount() {
        this.props.fetchPost()
    }
    render() {
        console.log(this.props.posts)
        return(
            <div>Hi</div>
        )
    }
};

const mapToStateToProps = (state) => {
    
    return { posts: state.fectchPostList}
}

export default connect(mapToStateToProps, { fetchPost })(PostList)



