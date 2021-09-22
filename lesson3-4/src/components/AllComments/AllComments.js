import React, { Component } from 'react'
import { Switch, withRouter, Route } from 'react-router-dom'
import CommentService from '../../services/CommentService'
import Comment from '../Comment/Comment'

class AllComments extends Component {

    state = { comments: [], comment: null }

    commentService = new CommentService()

    componentDidMount () {
        this.commentService.getAllComments().then(value => this.setState({ comments: value }))
    }

    selectThisComment = (id) => {
        this.commentService.getCommentById(id).then(value => this.setState({ comment: value }))
    }


    render() {
        let { comments, comment } = this.state
        let { match: { url } } = this.props


        return (
            <div> 
                 <Switch>

                    {
                        comment &&
                    
                        <Route path={`${url}/:id`} render={(props) => {
                            
                            console.log(props);
                            let { id } = props.match.params
                            this.selectThisComment(id)
                            console.log(comment);
                            return <Comment item={comment} key={id} />
                        }} />
                        
                    }             
                </Switch>


                {
                    comments.map(value => ( <Comment item={value} key={value.id} /> ))
                }                    
            </div>
        )
    }
}

export default withRouter(AllComments)