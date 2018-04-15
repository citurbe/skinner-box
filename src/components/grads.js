import React, { Component } from 'react';
import { AssistantDisplay } from './assistant-display';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { buyGrad, spendPellets } from '../redux/actions';
import grad from '../assets/images/grad.jpg';

class Grads extends React.Component {
    constructor(props){
        super(props);

    }

    buy(){
        if(this.props.pellets >= this.props.next){
            this.props.buyGrad();
            this.props.spendPellets(this.props.next);
        }
        
    }
    
    render(){
        return (
            <AssistantDisplay
            name="Grads"
            owned={this.props.owned}
            next={this.props.next}
            fpps={this.props.fpps}
            click={this.buy.bind(this)}
            active={this.props.pellets >= this.props.next}
            image={grad}
            text="Grad students are hollow shells of their former selves, desperately seeking approval. They'll probably pull a lever for us"
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        owned:state.assistants.grads.owned,
        next: state.assistants.grads.next,
        fpps: state.assistants.grads.fpps,
        pellets: state.apparatus.pellets
    };
  }
  
  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({buyGrad:buyGrad, spendPellets: spendPellets}, dispatch)
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Grads);