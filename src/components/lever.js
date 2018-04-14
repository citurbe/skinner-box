import React, { Component } from 'react';
import leverUp from '../assets/images/switch-up.png';
import leverDown from '../assets/images/switch-down.png';


export class Lever extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentLever: leverUp
        };
    
        this.flipDown = this.flipDown.bind(this);
        this.flipUp = this. flipUp.bind(this);
        
    }

    flipDown(){
        this.setState({
            currentLever: leverDown
        });
        this.props.incrementer();
    }
    flipUp(){
        this.setState({
            currentLever: leverUp
        });
    }

    render(){
        return (
            <img onMouseDown={this.flipDown} onMouseUp={this.flipUp} src={this.state.currentLever}/>
        );
    }
}