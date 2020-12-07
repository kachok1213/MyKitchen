import React, { Component } from 'react';
import {Form,Button} from 'react-bootstrap';



const ingridients = []

export default class CreateIng extends Component {
    constructor(props){
        super(props)
        this.state = {
            name:'',
            img:'',
            calories:''

       
    }

}

handleChanged = (item) =>{
    this.setState({[item.target.name]:item.target.value})
    
}



submit = () =>{
    
    let data = {
        name:this.state.name,
        img:this.state.img,
        calories:this.state.calories

    }
    ingridients.push(data)
    console.log(this.state)
    console.log(ingridients)
    
    
}

  render() {

    return (

        <div> 
        <Form>
        <h1>Create Ing</h1>
<Form.Group controlId="formBasicName" >
  <Form.Label>Name</Form.Label>
  <Form.Control type="Text" placeholder="Enter Recpie Name" value = {this.state.name} name = "name" onChange={this.handleChanged}/>
</Form.Group>
<Form.Group controlId="formBasicCm">
  <Form.Label>Image</Form.Label>
  <Form.Control type="Text" placeholder="Password" value = {this.state.img} name = "img"  onChange={this.handleChanged}/>
  </Form.Group>
  <Form.Group controlId="formTime">
  <Form.Label>Calories</Form.Label>
  <Form.Control type="Text" placeholder="Password" value = {this.state.calories} name = "calories" onChange={this.handleChanged} />
  </Form.Group>
  
<Button variant="primary" type="button" onClick={this.submit}>
  Submit
</Button>
<Button variant="primary" >
  Submit
</Button>
          </Form>
        
         </div>
    );
  }
}

