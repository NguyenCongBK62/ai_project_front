import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer';
import Navigation from './components/Nav/Navigation';
import Check from './containers/Check';
import SearchPatient from './containers/SearchPatient';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  
  return (
    <Router>
      <Navigation/>
      <Switch>
        <Route exact path='/'>
          <Check/>
        </Route>
        <Route path='/search'>
          <SearchPatient/>
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
