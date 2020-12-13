import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { Multiselect } from "multiselect-react-dropdown";

export default class CreateDish extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      cookingMethod: "",
      ingredients: null,
      Time: "",
      img: "",
      options: [],
      apiing: "https://localhost:44369/api/Ingredient/",
    };
  }

  clear = () => {
    this.setState({ name: "", cookingMethod: "", Time: "", img: "" }); //clear the data with setstate
  };

  componentDidMount() {
    fetch(this.state.apiing) //run first of all
      .then((res) => {
        console.log("res.ok", res.ok);
        return res.json();
      })
      .then(
        (result) => {
          let a = [];

          result.forEach((element) => {
            a.push({
              id: element.Id,
              name: element.Name,
              image: element.Image,
              calories: parseInt(element.Calories),
            });
          });

          this.setState({ options: a }); // we put a on option array state include id,name,image,calories
        },
        (error) => {
          console.log("err post=", error);
        }
      );
  }

  render() {
    return (
      <div>
        <Form style={{ marginLeft: "150px", marginRight: "150px" }}>
          <h1>Create New Recipe</h1>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="Text" placeholder="Enter recpie name" />
          </Form.Group>
          <Form.Group controlId="formBasicCm">
            <Form.Label>Cooking Method</Form.Label>
            <Form.Control
              type="Text"
              placeholder="Please enter preparation instructions"
            />
          </Form.Group>
          <Form.Group controlId="formTime">
            <Form.Label>Time</Form.Label>
            <Form.Control
              type="Text"
              placeholder="Please enter a time to cooking"
            />
          </Form.Group>
          <Form.Group controlId="formImage">
            <Form.Label>Image</Form.Label>
            <Form.Control type="Text" placeholder="Please enter a img source" />
          </Form.Group>
          <Form.Group controlId="formImage">
            <Form.Label>Select Ingridents</Form.Label>
            <Multiselect
              placeholder="Please Select Ingridents"
              options={this.state.options} // Options to display in the dropdown
              displayValue="name" // Property name to display in the dropdown options
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
          <br></br>
          <br></br>
          <Button
            variant="danger"
            type="submit"
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
