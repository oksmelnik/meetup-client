import { ADD_RSVP } from '../actions/actions'
import { rsvp } from '../lib/rsvp'

export default (state = rsvp, { type, payload } = {}) => {
  switch (type) {
    case ADD_RSVP :
      return [payload, ...state]


      default :
      return state
  }
}
