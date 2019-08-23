import React, { Component } from 'react';
import './App.css';
import TopicsList from './components/TopicsList'
import RsvpList from './components/RsvpList'
import LocationPicker from './components/LocationPicker'


class App extends Component {

  render() {

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

              <div className='column'>
                  <RsvpList />
              </div>

              <div className='column'>
                  <TopicsList />
              </div>

          </div>
      </div>
    );
  }
}

export default App;
