import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TopicsList from './components/TopicsList'
import RsvpList from './components/RsvpList'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
      <div class='column'>
        <RsvpList />
        </div>
        <div class='column'>
        <TopicsList />
</div>
      </div>
    );
  }
}

export default App;
