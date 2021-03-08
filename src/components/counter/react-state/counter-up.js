import React from 'react'

export default class CounterUp extends React.Component{
    render() {
        return(
        <button onClick={this.props.up}>
            Up
        </button>
        )
    }

}