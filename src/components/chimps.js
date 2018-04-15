import React, { Component } from 'react';
import { AssistantDisplay } from './assistant-display';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { buyChimp, spendPellets } from '../redux/actions';
import chimp from '../assets/images/chimp.jpg';

class Chimps extends React.Component {
    constructor(props){
        super(props);

    }

    buy(){
        if(this.props.pellets >= this.props.next){
            this.props.buyChimp();
            this.props.spendPellets(this.props.next);
        }
        
    }
    
    render(){
        return (
            <AssistantDisplay
            name="Chimps"
            owned={this.props.owned}
            next={this.props.next}
            fpps={this.props.fpps}
            click={this.buy.bind(this)}
            image={chimp}
            active={this.props.pellets >= this.props.next}
            text="A recent study found that chimpanzees solve puzzles for entertainment. So, I don't know, maybe they'll like pulling this lever"
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        owned:state.assistants.chimps.owned,
        next: state.assistants.chimps.next,
        fpps: state.assistants.chimps.fpps,
        pellets: state.apparatus.pellets
    };
  }
  
  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({buyChimp:buyChimp, spendPellets: spendPellets}, dispatch)
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Chimps);