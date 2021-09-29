import React, { Component } from 'react'
import { Switch, withRouter, Route } from 'react-router-dom'
import FullComment from '../../FullComment/FullComment'
import CommentService from '../../services/CommentService'
import Comment from '../Comment/Comment'

class AllComments extends Component {

    state = { comments: [] }

    commentService = new CommentService()

    componentDidMount () {
        this.commentService.getAllComments().then(value => this.setState({ comments: value }))
    }

    selectThisComment = (id) => {
        this.commentService.getCommentById(id).then(value => this.setState({ comment: value }))
    }


    render() {
        let { comments } = this.state
        let { match: { url } } = this.props


        return (
            <div> 
                 <hr />
                <Switch>
                    
                   
                    
                        <Route path={`${url}/:id`} render={(props) => {
                            let { match: { params: { id }}} = props
                            return <FullComment id={id} key={id}/>
                        }} />
                        
                            
                
                </Switch>
                    <hr />

                {
                    comments.map(value => ( <Comment item={value} key={value.id} /> ))
                }                    
            </div>
        )
    }
}

export default withRouter(AllComments)