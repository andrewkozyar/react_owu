import React, { Component } from 'react'
import PostComponent from './PostComponent';
import './AllPosts.css';

export default class AllPostsComponent extends Component {
  
    state = { posts: [], classState: 'one', chosenPost: null };

    flag = false;
    

    componentDidMount() {

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(postsFromApi => {
                this.setState({ posts: postsFromApi })
            })
            .catch(err => console.log(err));
    }

    changeColor = () => {
        if (this.flag) {
            this.setState({ classState: 'one' })
        } else {
            this.setState({ classState: 'two' })
        }
        this.flag = !this.flag
    }

    selectThisPost = (id) => {
        let chosenPost = this.state.posts.find(value => value.id === id)
        this.setState({ chosenPost })
    }


    
    render() {

        let { posts, chosenPost } = this.state
        
        return (
            <div>

                {
                    chosenPost && (<PostComponent item={chosenPost}/>)
                }

                <h1 onClick={ this.changeColor } className={ this.state.classState }>All posts</h1>
                
                {
                    posts.map(value => (<PostComponent item={value} key={value.id} selectThisPost={this.selectThisPost}/>))
                }
            </div>
        )
    }
}


