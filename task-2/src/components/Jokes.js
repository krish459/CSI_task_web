import React, { Component } from 'react'
import './jokes.css';




export default class Jokes extends Component {
    render() {
        let {catergory,joke} = this.props;
        return (
            <div>
                <div className="joke">
                <h4><strong>{catergory}</strong></h4>
                <p>{joke}</p>
                </div>
            </div>
        )
    }
}

