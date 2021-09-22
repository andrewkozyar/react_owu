import React, { Component } from 'react'

export default class PostComponent extends Component {
    render() {

        let {item, selectThisPost} = this.props

        return (
            <div>
                <h2>{item.id} - {item.title}</h2>
                <button onClick={ () => selectThisPost(item.id) }>Chose me</button>
                
                <hr/>
            </div>
        )
    }
}
