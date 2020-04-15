import React from 'react';

const API_URL = 'https://api.runningheroes.com';

// URL: ${API_URL}/v3/users/5411bab0c8e1e7656f4ff291/activities
// Method: GET
// Type: application/json
// QueryString :
// {
//   limit : 10,
//   sort: '-date',
//   skip: 0, 
//   type: 'Walking,Running,Cycling'
// }
function fetchActivities() {}

const App = () => (
  <div className="App">
    <header className="App-header">Activités</header>
    <div className="App-content" />
  </div>
);

export default App;
