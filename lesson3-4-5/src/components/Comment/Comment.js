import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';

class Comment extends Component {

    render() {

        let { item, match: { url } } = this.props

        return (
            <div>
                
                <h2>{ item.email }</h2>
                <Link to={`${url}/${item.id}`}><button>chose me</button></Link>
                <hr />

            </div>
        )
    }
}

export default withRouter(Comment)
