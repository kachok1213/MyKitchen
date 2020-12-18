import React from "react";
import Container from "react-bootstrap/Container";
import DishCard from "./DishCard";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class MyKitchen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: null,
      apidish: "https://localhost:44369/api/DishRecipe/",
    };
  }

  componentDidMount() {
    fetch(this.state.apidish)
      .then((res) => {
        console.log("res=", res);
        console.log("res.status", res.status);
        console.log("res.ok", res.ok);
        return res.json();
      })
      .then(
        (result) => {
          console.log("fetch = ", result);

          this.setState({ recipes: result });
        },
        (error) => {
          console.log("err post=", error);
        }
      );
  }

  render() {
    return (
      <Container fluid="md">
        <Row>
          <h1 style={{ marginLeft: "400px" }}>Recepis List : </h1>
        </Row>
        <br></br>;
        <Row>
          {this.state.recipes !== null ? (
            this.state.recipes.map((recipe) => (
              <Col>
                <DishCard key={recipe.Id} data={recipe} />
              </Col>
            ))
          ) : (
            <h1> No Dishes </h1>
          )}
        </Row>
      </Container>
    );
  }
}

export default MyKitchen;
