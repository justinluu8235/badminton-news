import React, { Component } from 'react';
import './SinglePlayer.css'

class SinglePlayer extends Component {

    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="individualPlayer">
                <div className="playerImage">
                    <div className="playerPhoto">
                        <img title="player-photo" src={this.props.photoURL} />
                    </div>
                    <div className="playerFlag">
                        <img title="player-flag" src={this.props.flagURL} alt="Indonesia" />
                    </div>
                </div>

                <div className="playerName">
                    <div><span class="name-first" title="player-first-name">{this.props.firstName}</span><span class="name-last">{this.props.lastName}</span></div>
                </div>
            </div>
        )
    }
}

export default SinglePlayer;