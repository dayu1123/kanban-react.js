import React from 'react'
import Login from './pages/Login.js'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          {/* <Route path="/" component={Home} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
