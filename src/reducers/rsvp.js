import { ADD_RSVP } from '../actions/actions'
import { rsvp } from '../lib/rsvp'
//https://css-tricks.com/learning-react-redux/
export default (state = rsvp, { type, payload } = {}) => {
  switch (type) {
    case ADD_RSVP :

    if (state.filter(i => i.rsvp_id === payload.rsvp_id).length === 0) {
        return [...state, payload]
    } else {
        return state
    }

      default :
      return state
  }
}
