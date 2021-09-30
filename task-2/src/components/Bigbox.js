
import './bigbox.css'
import Jokes from './Jokes'
import React, { Component } from 'react'

export default class bigbox extends Component {
    data = [
        {

            "key":"1",
            "category": "Programming",
            "joke": "Hey Girl,\nRoses are #ff0000,\nViolets are #0000ff,\nI use hex codes,\nBut I'd use RGB for you."
        },
        {
            "key":"2",
            "category": "Programming",
            "joke": "Debugging is like being the detective in a crime movie where you're also the murderer at the same time."
        },
        {
            "key":"3",
            "category": "Pun",
            "joke": "I have these weird muscle spasms in my gluteus maximus.\nI figured out from my doctor that everything was alright:\nHe said \"Weird flex, butt okay.\""
        },
        {
            "key":"4",
            "category": "Pun",
            "joke": "Today, my son asked \"Can I have a book mark?\" and I burst into tears. \n 11 years old and he still doesn't know my name is Brian."
        },
        {
            "key":"5",
            "category": "Misc",
            "joke": "Schrödinger's cat walks into a bar and doesn't."
        },
        {
            "key":"6",
            "category": "Programming",
            "joke": "Algorithm: A word used by programmers when they don't want to explain how their code works."
        }
    ]
    constructor(){
        super();
        this.state = {
            article : this.data
        };
    }
    render() {
            
        return (
            <div>
                <>
                    <h2>JOKES SECTION</h2>
                    <div className="bigbox">

                    {this.state.article.map((element) => {
                        return <div>
                        <Jokes key={element.key} catergory={element.category} joke={element.joke} />
                        </div>
                     })}
                     </div>
                    
                </>
            </div>
        )
    }
}
