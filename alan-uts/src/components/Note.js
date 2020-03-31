import React, { Component } from 'react'

export default class Note extends Component {
    render() {
        return (
            <div className="note" onClick={this.props.deleteMethod}>
                {/* <div className="text">Click to delete todo!</div> */}
                {this.props.text} <span className="tab">Click to delete todo!</span>
            </div>
        )
    }
}
