import React from 'react';
import './styles/global.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { MainTodo } from './pages/MainTodo';
import { About } from './pages/About';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={MainTodo} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
