import React from 'react'

export default class CounterDisplay
    extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <h1>Counter: {this.state.count}</h1>
        )
    }
}

