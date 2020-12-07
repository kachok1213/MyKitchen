import React, { Component } from 'react';
import {Form,Button} from 'react-bootstrap';


export default class CreateDish extends Component {
constructor(props){
    super(props)

    this.state = {
        name:'',
        cookingMethod:'',
        Time:'',
        img:''
    }



}






  render() {

    return (


      <div> 
          <Form>
          <h1>New Recipe</h1>
  <Form.Group controlId="formBasicName" >
    <Form.Label>Name</Form.Label>
    <Form.Control type="Text" placeholder="Enter Recpie Name" />
  </Form.Group>
  <Form.Group controlId="formBasicCm">
    <Form.Label>Cooking Method</Form.Label>
    <Form.Control type="Text" placeholder="Password" />
    </Form.Group>
    <Form.Group controlId="formTime">
    <Form.Label>Time</Form.Label>
    <Form.Control type="Text" placeholder="Password" />
    </Form.Group>
    <Form.Group controlId="formImage">
    <Form.Label>Image</Form.Label>
    <Form.Control type="Text" placeholder="Password" />
    </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
  <Button variant="primary" type="submit">
    Submit
  </Button>
            </Form>
          {console.log(this.props.ingridients)}
           </div>
    );
  }
}


