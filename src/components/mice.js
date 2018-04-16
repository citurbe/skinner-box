import React, { Component } from 'react';
import { AssistantDisplay } from './assistant-display';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { buyMouse, spendPellets } from '../redux/actions';
import mouse from '../assets/images/mouse.jpg'

class Mice extends React.Component {
    constructor(props){
        super(props);

    }

    buy(){
        if(this.props.pellets >= this.props.next){
            this.props.buyMouse();
            this.props.spendPellets(this.props.next);
        }
        
    }
    
    render(){
        return (
            <AssistantDisplay
            name="Mice"
            owned={this.props.owned}
            next={this.props.next}
            fpps={this.props.fpps}
            click={this.buy.bind(this)}
            image={mouse}
            active={this.props.pellets >= this.props.next}
            text="Push the lever so you don't have to."
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        owned:state.assistants.mice.owned,
        next: state.assistants.mice.next,
        fpps: state.assistants.mice.fpps,
        pellets: state.apparatus.pellets
    };
  }
  
  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({buyMouse:buyMouse, spendPellets: spendPellets}, dispatch)
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Mice);