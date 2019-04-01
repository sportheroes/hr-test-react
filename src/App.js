import React from 'react';

import './App.css';

const API_URL = 'https://api.runningheroes.com';

// URL: ${API_URL}/v3/users/56c35408de31c6b954b81080/activities
// Method: GET
// Type: application/json
// QueryString :
// {
//   limit : 10,
//   sort: '-date',
//   skip: 0
// }
function fetchActivities() {}

const App = () => (
  <div className="App">
    <header className="App-header">Activités</header>
    <div className="App-content" />
    <div className="App-more">Voir plus</div>
  </div>
);

export default App;
