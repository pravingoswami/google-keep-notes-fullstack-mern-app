import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { connect } from 'react-redux';

class CategoryForm extends React.Component{


    render(){
        return(
            <div>
                <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" style = {{width : "200px"}} />
            <br></br>
        <Button color="primary">submit</Button>{' '}
            </div>
        )
    }
}

export default connect()(CategoryForm)