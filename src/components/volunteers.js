import React, { Component } from 'react';
import { AssistantDisplay } from './assistant-display';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { buyVolunteer, spendPellets } from '../redux/actions';
import volunteer from '../assets/images/volunteer.jpeg';

class Volunteer extends React.Component {
    constructor(props){
        super(props);

    }

    buy(){
        if(this.props.pellets >= this.props.next){
            this.props.buyVolunteer();
            this.props.spendPellets(this.props.next);
        }
        
    }
    
    render(){
        return (
            <AssistantDisplay
            name="Volunteer"
            owned={this.props.owned}
            next={this.props.next}
            fpps={this.props.fpps}
            click={this.buy.bind(this)}
            image={volunteer}
            active={this.props.pellets >= this.props.next}
            text="They signed up for this. Let's not think too hard about why."
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        owned:state.assistants.volunteers.owned,
        next: state.assistants.volunteers.next,
        fpps: state.assistants.volunteers.fpps,
        pellets: state.apparatus.pellets
    };
  }
  
  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({buyVolunteer:buyVolunteer, spendPellets: spendPellets}, dispatch)
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Volunteer);