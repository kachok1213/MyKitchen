import React, { Component } from "react";

import { Button, Card, Modal } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Ingredient from "./IngredientCard";

class DishRecipe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lgShow: false,
    };
  }

  calculateCalories = () => {
    let sum = 0;
    this.props.data.Ingredients.forEach((e) => {
      sum += e.Calories;
    });

    alert("total calories: " + sum);
  };

  render() {
    let lgClose = () => this.setState({ lgShow: false });

    return (
      <div>
        <Card style={{ width: "20rem" }}>
          <Card.Img
            variant="top"
            src={this.props.data.Image}
            style={{ width: "18rem", height: "200px" }}
          />
          <Card.Body>
            <Card.Title> Name: {this.props.data.Name}</Card.Title>
            <Card.Text>
              Cooking Method: {this.props.data.CookingMethod}
            </Card.Text>
            <Card.Title> Time: {this.props.data.Time} Minuts</Card.Title>
            {this.props.data.Ingredients.length > 0 ? (
              <div>
                {" "}
                <Button
                  variant="dark"
                  onClick={() => this.setState({ lgShow: true })}
                >
                  Get Ingredients!
                </Button>{" "}
                <br />
                <br />{" "}
                <Button variant="primary" onClick={this.calculateCalories}>
                  Get Calculate Calories!
                </Button>
              </div>
            ) : (
              <h5 style={{ color: "red" }}>No Ingredient</h5> // else
            )}
          </Card.Body>
        </Card>
        <Modal
          size="lg"
          show={this.state.lgShow}
          onHide={lgClose}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              Ingredients
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {" "}
            <Row>
              {" "}
              {this.props.data.Ingredients.length > 0
                ? this.props.data.Ingredients.map((ingredientss) => (
                    <Col>
                      {" "}
                      <Ingredient
                        key={ingredientss.Id}
                        data={ingredientss}
                      />{" "}
                    </Col>
                  ))
                : null}
            </Row>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default DishRecipe;
