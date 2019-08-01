import { CHANGE_COUNTRY } from '../actions/actions'

export default (state = 'nl', { type, payload } = {}) => {
  switch (type) {
    case CHANGE_COUNTRY:
      return payload

    default :
      return state
  }
}
