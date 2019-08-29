import * as request from 'superagent'

const baseUrl = 'http://localhost:3002'

export const ADD_RSVP = 'ADD_RSVP'
export const UPDATE_TOPIC = 'UPDATE_TOPIC'
export const SET_LOADING = 'SET_LOADING'


export const addPayload = (payload, loading) => (dispatch) => {

    dispatch(
        {
            type: ADD_RSVP,
            payload: payload
        })

    if (loading) {
          dispatch(
          {
              type: SET_LOADING,
              payload: false
          })
    }
}

export const addTopics = (payload) => (dispatch) => {

  dispatch({
    type: UPDATE_TOPIC,
    payload: payload
})}

export const changeCountry = (id) => (dispatch) => {

  request
    .get(`${baseUrl}/country/${id}`)
    .then(() => {
        dispatch({
            type: SET_LOADING,
            payload: true
        })
  })
    .catch(err => alert(err))

   }
