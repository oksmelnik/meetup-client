import React, { Component } from 'react';
import './App.css';
import TopicsList from './components/TopicsList'
import RsvpList from './components/RsvpList'
import CityPicker from './components/CityPicker'

class App extends Component {
  render() {
    return (
      <div className="App">
          <header className="App-header">
              <h1 className="App-title"></h1>

              <h2 className="App-title"></h2>

              <div className="spinner">
                  <div className="bounce1"></div>
                  <div className="bounce2"></div>
                  <div className="bounce3"></div>
              </div>
              <CityPicker />
          </header>

          <div className='column'>
              <RsvpList />
          </div>

          <div className='column'>
              <TopicsList />
          </div>
      </div>
    );
  }
}

export default App;
