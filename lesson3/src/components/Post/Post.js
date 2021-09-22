import React, { Component } from 'react'

export default class Post extends Component {
    
    render() {

        let { item, selectThisPost, turnOfButton } = this.props

        return (
            <div>
                <h1>{item.title}
                {
                    !turnOfButton && <button onClick={() => selectThisPost(item.id)}>chose me</button>
                }
                </h1> 
                {item.body}
                <hr/>

                
                
            </div>
        )
    }
}
