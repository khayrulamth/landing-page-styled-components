import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import signin from './pages/Signin';
import Signin from './pages/Signin';

function App() {
  return (
    <Router >
      <Switch>
        <Route path="/" exact>
          <Home></Home>
        </Route>
        <Route>
          <Signin></Signin>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
