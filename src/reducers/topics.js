import { UPDATE_TOPIC } from '../actions/actions'

export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case UPDATE_TOPIC :
      return payload

    default :
      return state
  }
}
