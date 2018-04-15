import React, { Component } from 'react';
import { AssistantDisplay } from './assistant-display';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { buyPigeon, spendPellets } from '../redux/actions';
import pigeon from '../assets/images/pigeon.jpg'

class Pigeons extends React.Component {
    constructor(props){
        super(props);
    }

    buy(){
        if(this.props.pellets >= this.props.next){
            this.props.buyPigeon();
            this.props.spendPellets(this.props.next);
        }
        
    }
    
    render(){
        return (
            <AssistantDisplay
            name="Pigeons"
            owned={this.props.owned}
            next={this.props.next}
            fpps={this.props.fpps}
            click={this.buy.bind(this)}
            image={pigeon}
            active={this.props.pellets >= this.props.next}
            text="Able to find their way home at distances over a thousand miles. Let's have then pull this lever"
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        owned:state.assistants.pigeons.owned,
        next: state.assistants.pigeons.next,
        fpps: state.assistants.pigeons.fpps,
        pellets: state.apparatus.pellets
    };
  }
  
  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({buyPigeon:buyPigeon, spendPellets: spendPellets}, dispatch)
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Pigeons);