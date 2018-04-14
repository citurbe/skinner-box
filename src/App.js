import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Lever } from './components/lever';
import Mice from './components/mice';
import Rats from './components/rats';
import Pigeons from './components/pigeons';
import Monkeys from './components/monkeys';
import Chimps from './components/chimps';
import Undergrads from './components/undergrads';
import Grads from './components/grads';
import Volunteers from './components/volunteers';
import { addPellets } from './redux/actions'
import { lookup } from './config/constants';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {pellets: 0};
    this.increment = this.increment.bind(this);
    this.income = this.income.bind(this);
  
  setInterval(this.income, 1000);
  
  }

  increment(){
    this.props.addPellets(1);
  }

  income(){
    this.props.addPellets(this.props.fpps);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Skinner Box</h1>
          <h3>Let's not kid ourselves about what we're doing here</h3>
        </header>
        <div className="container">
          <div className="apparatus">
            <Lever incrementer={this.increment} />
            <div>
              <p>Food Pellets: {Math.floor(this.props.pellets)}</p>
              {this.props.fpps > 0 && <p>FPPS: {this.props.fpps}</p>}
            </div>
          </div>
          <div className="assistants">
          {(this.props.assistants.mice.owned > 0 || this.props.pellets >= lookup.mice.baseCost) && <Mice /> }
          {!!this.props.assistants.mice.owned  && <Rats /> }
          {!!this.props.assistants.rats.owned && <Pigeons /> }
          {!!this.props.assistants.pigeons.owned && <Monkeys /> }
          {!!this.props.assistants.monkeys.owned && <Chimps /> }
          {!!this.props.assistants.chimps.owned && <Undergrads /> }
          {!!this.props.assistants.undergrads.owned && <Grads /> }
          {!!this.props.assistants.grads.owned && <Volunteers /> }
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pellets:state.apparatus.pellets,
    fpps: state.apparatus.fpps,
    assistants:state.assistants
        };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({addPellets:addPellets}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
