import React from 'react'
import CounterDisplay from "./counter-display";
import CounterDown from "../react-state/counter-down";
import CounterUp from "../react-state/counter-up";

export default class CounterRedux extends React.Component {
    render() {
        return(
            <div>
                <CounterDisplay/>
                <CounterDown/>
                <CounterUp/>
            </div>
        );
    }
}