import React, { Component } from 'react'
import CommentService from '../services/CommentService'

export default class FullComment extends Component {

    state = { comment: null }
    commentService = new CommentService()

    async componentDidMount() {
        let { id } = this.props
        this.selectThisComment(id)
    }

    selectThisComment = (id) => {
        this.commentService.getCommentById(id).then(value => this.setState({ comment: value }))
    }

    render() {

        let { comment } = this.state


        return (
            <div>

                {
                    comment &&
                    <div>
                        <h2>{comment.email}</h2>
                        <p>{comment.body}</p>
                    </div>

                }
                

            </div>
        )
    }
}
