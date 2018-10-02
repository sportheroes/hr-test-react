import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

class App extends Component {

  state = {
    activities: []
  };

  async getActivities() {
    return await axios.get('https://api.runningheroes.com/v3/users/56c35408de31c6b954b81080/activities', {
      params: {
        limit : 10,
        sort: '-points',
        skip: 0
      }
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">

        </header>
      </div>
    );
  }
}

export default App;
