import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from 'react-router-dom';
import Login from './Screens/Login';
import Register from './Screens/Register';
import Home from './Screens/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
