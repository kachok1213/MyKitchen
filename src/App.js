import "./App.css";
import React from "react";
import CreateDish from "./Component/CreateDish";
import CreateIng from "./Component/CreateIng";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from "react-router-dom";
import MyKitchen from "./Component/MyKitchen";
import { Nav, Navbar, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Nav.Link href="/Mykitchen">
          <Image
            style={{ width: 50, height: 50 }}
            src="https://i.pinimg.com/originals/98/82/ec/9882ec514a7646b304d06f8f42a15a0c.png"
            roundedCircle
          />
        </Nav.Link>
        <Nav className="mr-auto">
          <Nav.Link href="/Mykitchen">oryan</Nav.Link>
          <Nav.Link href="/CreateIng">Create New ngredient</Nav.Link>
          <Nav.Link href="/CreateDish">Create Dish</Nav.Link>
        </Nav>
      </Navbar>

      <Switch>
        <Route exact path="/MyKitchen">
          <MyKitchen />
        </Route>
        <Route exact path="/CreateDish">
          <CreateDish />
        </Route>
        <Route exact path="/CreateIng">
          <CreateIng />
        </Route>
      </Switch>
    </div>
  );
}

export default withRouter(App);
