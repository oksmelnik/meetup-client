import React, { PureComponent } from 'react';
import './App.css';
import io from 'socket.io-client'
import { addPayload, addTopics } from './actions/actions'
import {connect} from 'react-redux'

import LocationPicker from './components/LocationPicker'
const socket = io.connect('http://localhost:3002', {autoConnect: false})

socket.connect()

// temp hack to prevent page overload
setTimeout(() => {
    socket.close()
}, 40000);


class App extends PureComponent {


  render() {

    socket.on('action', input => {
      if (input.type === 'ADD_RSVP') {

          this.props.addPayload(input.payload, this.props.state.loading)
      } else if (input.type === 'UPDATE_TOPIC') {
            this.props.addTopics(input.payload)
      }
    })

    return (
    <div className='body'>
      <div className="App">

          <header className="App-header">

              <h1 className="App-title">Real time meetup.com rsvps</h1>

              <div className="spinner">
                  <div className="bounce1"></div>
                  <div className="bounce2"></div>
                  <div className="bounce3"></div>
              </div>

          </header>
              <LocationPicker />
          </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  state
})
 export default connect(mapStateToProps, {addPayload, addTopics})(App)
