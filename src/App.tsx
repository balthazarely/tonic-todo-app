import React from 'react';
import './styles/global.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { Todo } from './pages/Todo';
import { SingleTodo } from './pages/SingleTodo';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/repo/:author/:name" component={Todo} />
          <Route exact path="/" component={SingleTodo} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
