import React, { Component } from 'react';
import { AssistantDisplay } from './assistant-display';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { buyRat, spendPellets } from '../redux/actions';
import rat from '../assets/images/rat.jpg';

class Rats extends React.Component {
    constructor(props){
        super(props);

    }

    buy(){
        if(this.props.pellets >= this.props.next){
            this.props.buyRat();
            this.props.spendPellets(this.props.next);
        }
        
    }
    
    render(){
        return (
            <AssistantDisplay
            name="Rats"
            owned={this.props.owned}
            next={this.props.next}
            fpps={this.props.fpps}
            click={this.buy.bind(this)}
            image={rat}
            active={this.props.pellets >= this.props.next}
            text="Much smarter than mice. Let's harness that intelligence for more lever pulling."
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        owned:state.assistants.rats.owned,
        next: state.assistants.rats.next,
        fpps: state.assistants.rats.fpps,
        pellets: state.apparatus.pellets
    };
  }
  
  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({buyRat:buyRat, spendPellets: spendPellets}, dispatch)
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Rats);