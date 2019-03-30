import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPostList } from '../Actions/';

class PostList extends Component {

    componentDidMount() {
        this.props.fetchPostList()
    }
    
    renderPostList() {
        return this.props.posts.map(post => {
            return (
                <div>
                    <h3>TITLE : {post.title}</h3>
                    BODY : {post.body}
                    <br/>

                </div>
            )
        })
    }

    render() {
        return (
            <div>{this.renderPostList()}</div>
        )
    }
}


const mapStateToProps = (state) => {
    console.log(state)
    return {posts: state.posts}
}
export default connect( mapStateToProps, { fetchPostList })(PostList);