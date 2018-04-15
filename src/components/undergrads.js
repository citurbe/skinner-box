import React, { Component } from 'react';
import { AssistantDisplay } from './assistant-display';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { buyUndergrad, spendPellets } from '../redux/actions';
import undergrad from '../assets/images/undergrad.jpeg';

class Undergrads extends React.Component {
    constructor(props){
        super(props);

    }

    buy(){
        if(this.props.pellets >= this.props.next){
            this.props.buyUndergrad();
            this.props.spendPellets(this.props.next);
        }
        
    }
    
    render(){
        return (
            <AssistantDisplay
            name="Psych 101 Students"
            owned={this.props.owned}
            next={this.props.next}
            fpps={this.props.fpps}
            click={this.buy.bind(this)}
            image={undergrad}
            active={this.props.pellets >= this.props.next}
            text="Psych 101 students are require to participate in a lab experiment every semester. Amazingly, pulling this lever qualifies"
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        owned:state.assistants.undergrads.owned,
        next: state.assistants.undergrads.next,
        fpps: state.assistants.undergrads.fpps,
        pellets: state.apparatus.pellets
    };
  }
  
  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({buyUndergrad:buyUndergrad, spendPellets: spendPellets}, dispatch)
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Undergrads);