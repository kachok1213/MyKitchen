import React, { Component } from "react";
import { Example } from "./Example";
import { Form, Button } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";

const ingridients = [];
let apiing = "https://localhost:44369/api/Ingredient/";

export default class CreateIng extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      image: "",
      calories: "",
    };
  }
  componentDidMount() {}

  clear = () => {
    this.setState({ name: "", image: "", calories: 0 });
  };

  handleChanged = (item) => {
    this.setState({ [item.target.name]: item.target.value });
  };

  submit = () => {
    console.log("submit");
    let data = {
      name: this.state.name,
      image: this.state.image,
      calories: this.state.calories,
    };
    ingridients.push(data);
    console.log(ingridients); // ingridients it is array that holder the data

    fetch(apiing, {
      method: "POST",
      body: JSON.stringify(data),
      headers: new Headers({
        "Content-type": "application/json; charset=UTF-8", //very important to add the 'charset=UTF-8'!!!!
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then(
        (result) => {
          if (result === 1) {
            alert("Ingredient added");
          }
        },
        (error) => {
          console.log("err post=", error);
        }
      );
  };

  render() {
    return (
      <div>
        <Form style={{ marginLeft: "150px", marginRight: "150px" }}>
          <h1>Create New Ingredients</h1>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="Text"
              placeholder="Enter Recpie Name"
              value={this.state.name}
              name="name"
              onChange={this.handleChanged}
            />
          </Form.Group>
          <Form.Group controlId="formBasicCm">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="Text"
              placeholder="Please enter a img source"
              value={this.state.image}
              name="image"
              onChange={this.handleChanged}
            />
          </Form.Group>
          <Form.Group controlId="formTime">
            <Form.Label>Calories</Form.Label>
            <Form.Control
              type="Text"
              placeholder="Please enter some calorie on ingridients"
              value={this.state.calories}
              name="calories"
              onChange={this.handleChanged}
            />
          </Form.Group>

          <Button
            active
            variant="primary"
            type="button"
            onClick={this.submit}
            size="lg"
          >
            Submit
          </Button>
          <br></br>
          <br></br>
          <Button
            active
            size="lg"
            variant="danger"
            onClick={this.clear}
            style={{ width: "150px" }}
          >
            Clear
          </Button>
        </Form>
      </div>
    );
  }
}
