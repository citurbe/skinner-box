import { combineReducers } from 'redux';
import { lookup, cost } from '../config/constants';
import * as _ from 'lodash';

const apparatus = (state = { pellets: 0, fpps: 0 }, action) => {
  switch (action.type) {
    case 'ADD':
      return Object.assign({}, state, { pellets: state.pellets + action.payload });
    case 'SPEND':
      return Object.assign({}, state, { pellets: state.pellets - action.payload });
    case 'BUY_MOUSE':
      return Object.assign({}, state, { fpps: _.round(state.fpps + lookup.mice.baseIncome, 2) });
    case 'BUY_RAT':
      return Object.assign({}, state, { fpps: _.round(state.fpps + lookup.rats.baseIncome, 2) });
    case 'BUY_PIGEON':
      return Object.assign({}, state, { fpps: _.round(state.fpps + lookup.pigeons.baseIncome, 2) });
    case 'BUY_MONKEY':
      return Object.assign({}, state, { fpps: _.round(state.fpps + lookup.monkeys.baseIncome, 2) });
    case 'BUY_CHIMP':
      return Object.assign({}, state, { fpps: _.round(state.fpps + lookup.chimps.baseIncome, 2) });
    case 'BUY_UNDERGRAD':
      return Object.assign({}, state, { fpps: _.round(state.fpps + lookup.undergrads.baseIncome, 2) });
    case 'BUY_GRAD':
      return Object.assign({}, state, { fpps: _.round(state.fpps + lookup.grads.baseIncome, 2) });
    case 'BUY_VOLUNTEER':
      return Object.assign({}, state, { fpps: _.round(state.fpps + lookup.volunteers.baseIncome) });
    default:
      return state;
  }
};

const assistants = (
  state = {
    mice: {
      owned: 0,
      next: lookup.mice.baseCost,
      fpps: 0
    },
    rats: {
      owned: 0,
      next: lookup.rats.baseCost,
      fpps: 0
    },
    pigeons: {
      owned: 0,
      next: lookup.pigeons.baseCost,
      fpps: 0
    },
    monkeys: {
      owned: 0,
      next: lookup.monkeys.baseCost,
      fpps: 0
    },
    chimps: {
      owned: 0,
      next: lookup.chimps.baseCost,
      fpps: 0
    },
    undergrads: {
      owned: 0,
      next: lookup.undergrads.baseCost,
      fpps: 0
    },
    grads: {
      owned: 0,
      next: lookup.grads.baseCost,
      fpps: 0
    },
    volunteers: {
      owned: 0,
      next: lookup.volunteers.baseCost,
      fpps: 0
    }
  },
  action
) => {
  switch (action.type) {
    case 'BUY_MOUSE':
      return Object.assign({}, state, {
        mice: {
          owned: state.mice.owned + 1,
          next: cost(lookup.mice.baseCost, state.mice.owned + 1),
          fpps: _.round(lookup.mice.baseIncome * (state.mice.owned + 1), 2)
        }
      });
    case 'BUY_RAT':
      return Object.assign({}, state, {
        rats: {
          owned: state.rats.owned + 1,
          next: cost(lookup.rats.baseCost, state.rats.owned + 1),
          fpps: _.round(lookup.rats.baseIncome * (state.rats.owned + 1), 2)
        }
      });
    case 'BUY_PIGEON':
      return Object.assign({}, state, {
        pigeons: {
          owned: state.pigeons.owned + 1,
          next: cost(lookup.pigeons.baseCost, state.pigeons.owned + 1),
          fpps: _.round(lookup.pigeons.baseIncome * (state.pigeons.owned + 1), 2)
        }
      });
    case 'BUY_MONKEY':
      return Object.assign({}, state, {
        monkeys: {
          owned: state.monkeys.owned + 1,
          next: cost(lookup.monkeys.baseCost, state.monkeys.owned + 1),
          fpps: _.round(lookup.monkeys.baseIncome * (state.monkeys.owned + 1), 2)
        }
      });
    case 'BUY_CHIMP':
      return Object.assign({}, state, {
        chimps: {
          owned: state.chimps.owned + 1,
          next: cost(lookup.chimps.baseCost, state.chimps.owned + 1),
          fpps: _.round(lookup.chimps.baseIncome * (state.chimps.owned + 1), 2)
        }
      });
    case 'BUY_UNDERGRAD':
      return Object.assign({}, state, {
        undergrads: {
          owned: state.undergrads.owned + 1,
          next: cost(lookup.undergrads.baseCost, state.undergrads.owned + 1),
          fpps: _.round(lookup.undergrads.baseIncome * (state.undergrads.owned + 1), 2)
        }
      });
    case 'BUY_GRAD':
      return Object.assign({}, state, {
        grads: {
          owned: state.grads.owned + 1,
          next: cost(lookup.grads.baseCost, state.grads.owned + 1),
          fpps: _.round(lookup.grads.baseIncome * (state.grads.owned + 1), 2)
        }
      });
    case 'BUY_VOLUNTEER':
      return Object.assign({}, state, {
        volunteers: {
          owned: state.volunteers.owned + 1,
          next: cost(lookup.volunteers.baseCost, state.volunteers.owned + 1),
          fpps: _.round(lookup.volunteers.baseIncome * (state.volunteers.owned + 1), 2)
        }
      });

    default:
      return state;
  }
};

export const rootReducer = combineReducers({ apparatus, assistants });
