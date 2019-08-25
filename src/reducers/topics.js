import { UPDATE_TOPIC } from '../actions/actions'
import { topics } from '../lib/topics'

export default (state = topics, { type, payload } = {}) => {
  switch (type) {
    case UPDATE_TOPIC :
      return payload

    default :
      return state
  }
}
