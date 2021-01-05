import React, { Component } from 'react';

import './App.css';

import { Content } from './components/content';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap'; //importing bootstrap components

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Pick} from './components/pick';
import { Team } from './components/team';
import { Tops } from './components/tops';
import { Edit } from './components/edit';
import logow from './logow.png';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <Navbar fixed="top" bg="dark" variant="dark"> 
          <Navbar.Brand href="#home">
      <img
        src= {logow}
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="X1"
      />
    </Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">World X1</Nav.Link>
              <Nav.Link href="/tops">Stats</Nav.Link>
              <Nav.Link href="/team">Edit XI</Nav.Link>
              <Nav.Link href="pick">Pick Team</Nav.Link>
            </Nav>
          </Navbar>
<br /><br />

          <Switch>
            <Route path='/' component={Content} exact />
            <Route path='/tops' component={Tops} exact />
            <Route path='/pick' component={Pick} exact />
            <Route path='/team' component={Team} exact />
            <Route path='/edit/:id' component={Edit}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
