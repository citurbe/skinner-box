import React, { Component } from 'react';
import { AssistantDisplay } from './assistant-display';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { buyMonkey, spendPellets } from '../redux/actions';
import monkey from '../assets/images/monkey.jpg';

class Monkeys extends React.Component {
    constructor(props){
        super(props);

    }

    buy(){
        if(this.props.pellets >= this.props.next){
            this.props.buyMonkey();
            this.props.spendPellets(this.props.next);
        }
        
    }
    
    render(){
        return (
            <AssistantDisplay
            name="Monkeys"
            owned={this.props.owned}
            next={this.props.next}
            fpps={this.props.fpps}
            click={this.buy.bind(this)}
            image={monkey}
            text="Monkeys went to space before humans! Let's have them pull a lever for a while"
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        owned:state.assistants.monkeys.owned,
        next: state.assistants.monkeys.next,
        fpps: state.assistants.monkeys.fpps,
        pellets: state.apparatus.pellets
    };
  }
  
  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({buyMonkey:buyMonkey, spendPellets: spendPellets}, dispatch)
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Monkeys);