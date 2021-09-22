import React, { Component } from 'react'
import PostService from '../../services/PostService'
import Post from '../Post/Post'


export default class AllPosts extends Component {

    state = { posts: [], chosenPost: null };

    postService = new PostService();

    componentDidMount() {
        this.postService.getAllPosts().then(value => this.setState({ posts: value }))   
    }

    selectThisPost = (id) => {
        this.postService.getPostById(id).then(value => this.setState({ chosenPost: value }))   
    }

    render() {
        let { posts, chosenPost } = this.state

        return (
            <div>
                {
                    chosenPost && <Post item={chosenPost} turnOfButton={true} />
                }
                {
                    posts.map(value => (<Post item={value} key={value.id} selectThisPost={this.selectThisPost} />))
                }
                

            </div>

        )
    }
}
