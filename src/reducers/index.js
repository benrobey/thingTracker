import * as ActionTypes from '../actions'
import merge from 'lodash/merge'
import { combineReducers } from 'redux'

const initialState = {
  beacons: [],
  test: [],
  user: {}
}

function beacons(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.BEACON_EVENT_REQUEST:
      return Object.assign({}, state, {
        beacons: [
      ...state.beacons,
      action.event
    ]
      })
    default:
      return state
  }
}


const rootReducer = combineReducers({
  beacons
});

export default rootReducer
