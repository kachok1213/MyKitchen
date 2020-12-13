import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

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

  handleChanged = (item) => {
    this.setState({ [item.target.name]: item.target.value });
  };

  submit = () => {
    let data = {
      name: this.state.name,
      image: this.state.image,
      calories: this.state.calories,
    };
    ingridients.push(data);
    console.log(ingridients);

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
        <Form>
          <h1>Create Ing</h1>
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
              placeholder="Password"
              value={this.state.image}
              name="image"
              onChange={this.handleChanged}
            />
          </Form.Group>
          <Form.Group controlId="formTime">
            <Form.Label>Calories</Form.Label>
            <Form.Control
              type="Text"
              placeholder="Password"
              value={this.state.calories}
              name="calories"
              onChange={this.handleChanged}
            />
          </Form.Group>

          <Button variant="primary" type="button" onClick={this.submit}>
            Submit
          </Button>
          <Button variant="primary">Submit</Button>
        </Form>
      </div>
    );
  }
}
