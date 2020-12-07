import './App.css';
import React from 'react'
import CreateDish from './Component/CreateDish';
import CreateIng from './Component/CreateIng';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import MyKitchen from './Component/MyKitchen';
import {Container, Button ,Form,FormControl,Nav,Navbar,Col,Image} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  

  return (
    <div className="App">
  
  <Navbar bg="dark" variant="dark">
  <Nav.Link href="/Mykitchen"><Image  style={{width: 50, height: 50}} src="https://cdn4.vectorstock.com/i/1000x1000/04/68/chef-kitchen-icon-vector-3890468.jpg" roundedCircle /></Nav.Link>
    <Nav className="mr-auto">
      <Nav.Link href="/Mykitchen">My kitchen</Nav.Link>
      <Nav.Link href="/CreateIng">Create New ngredient</Nav.Link>
      <Nav.Link href="/CreateDish">Create Dish</Nav.Link>
    </Nav>
  </Navbar>
  
  <Switch>
          <Route exact path="/MyKitchen">
           <MyKitchen/>
          </Route>
          <Route exact path="/CreateDish">
            <CreateDish/>
          </Route>
          <Route exact path="/CreateIng">
            <CreateIng/>
          </Route>
  </Switch>

  
    </div>
    
  );
}

export default withRouter(App);
