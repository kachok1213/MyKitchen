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
      time: "",
      image: "",
      options: [],
      selectedValue: [],
      apiing: "https://localhost:44369/api/Ingredient/",
      apidish: "https://localhost:44369/api/DishRecipe/",
    };
  }

  clear = () => {
    this.setState({ name: "", cookingMethod: "", time: "", image: "" }); //clear the data with setstate
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

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSelect = (e) => {
    console.log(e); //see the select option on console;
    let a = this.state.selectedValue;
    a.push(e);
    this.setState({ selectedValue: a });
  };

  submit = (event) => {
    const data = {
      name: this.state.name,
      image: this.state.image,
      cookingMethod: this.state.cookingMethod,
      ingredients: this.state.selectedValue[0],
      time: parseInt(this.state.time),
    };

    console.log("data", data);
    fetch(this.state.apidish, {
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
            alert("recipe added");
          }
        },
        (error) => {
          console.log("err post=", error);
        }
      );

    this.setState({ name: "", cookingMethod: "", time: "", image: "" }); //clear the data with setstate
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <Form
          style={{ marginLeft: "150px", marginRight: "150px" }}
          onSubmit={this.submit}
        >
          <h1>Create New Recipe</h1>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="Text"
              name="name"
              placeholder="Enter recpie name"
            />
          </Form.Group>
          <Form.Group controlId="formBasicCm">
            <Form.Label>Cooking Method</Form.Label>
            <Form.Control
              type="Text"
              placeholder="Please enter preparation instructions"
              onChange={this.handleChange}
              name="cookingMethod"
            />
          </Form.Group>
          <Form.Group controlId="formTime">
            <Form.Label>Time</Form.Label>
            <Form.Control
              type="Text"
              placeholder="Please enter a time to cooking"
              onChange={this.handleChange}
              name="time"
            />
          </Form.Group>
          <Form.Group controlId="formImage">
            <Form.Label>Image</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              type="Text"
              placeholder="Please enter a img source"
              name="image"
            />
          </Form.Group>
          <Form.Group controlId="formImage">
            <Form.Label>Select Ingridents</Form.Label>
            <Multiselect
              placeholder="Please Select Ingridents"
              selectedValues={this.state.selectedValue}
              options={this.state.options} // Options to display in the dropdown
              onSelect={this.onSelect}
              displayValue="name" // Property name to display in the dropdown options
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            size="lg"
            onClick={this.submit}
          >
            Submit
          </Button>
          <br></br>
          <br></br>
          <Button
            size="lg"
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
