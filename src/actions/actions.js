import * as request from 'superagent'

const baseUrl = 'http://localhost:3002'

export const ADD_RSVP = 'ADD_RSVP'
export const UPDATE_TOPIC = 'UPDATE_TOPIC'


export const rsvp = () => ({
  type: ADD_RSVP,
  payload: {}
})

export const topics = () => ({
  type: UPDATE_TOPIC,
  payload: {}
})
