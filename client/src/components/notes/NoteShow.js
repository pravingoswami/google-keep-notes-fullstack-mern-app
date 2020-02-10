import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { startEditNote } from '../../actions/notesAction';

class NoteShow extends React.Component{
    
    constructor(props){
        super()
        this.state = {
            colors : ["blue", "yellow", "green"]     
        }
    }

    handleColor = (e) => {
        console.log(e.target.value)
        this.props.dispatch(startEditNote(this.props.match.params.note, {color : e.target.value}))
    }

    // headerStyle = {
    //     // color : {this.props.note && this.props.note.color}
    //     // color : "blue"
    // }

    render(){
        return(
            <div>
                <h1 style = {{color : `${ this.props.note && this.props.note.color}` }} >{this.props.match.params.note}</h1>
        {
            this.props.note && (
                <div>
                     <h2 style = {{color : `${ this.props.note && this.props.note.color}` }} >{this.props.note.title}</h2>
                     <h2 style = {{color : `${ this.props.note && this.props.note.color}` }} >{this.props.note.description}</h2>
                     <h2 style = {{color : `${ this.props.note && this.props.note.color}` }} >{this.props.note.color}</h2>
                </div>
            )
        }
    <br></br>
           {
               this.props.note &&  <div>
                   <Label for="exampleSelect">color</Label>
               <Input type="select" name="select" id="exampleSelect" style = {{width : "100px"}} onChange = {this.handleColor} >
                {
                    this.state.colors.map(color => <option value = {color} >{color}</option>)
                }
               </Input>
               </div>
           }
            <br></br>
            <button><Link to = {`/notes/edit-note/${this.props.match.params.note}`} >Edit Note</Link></button>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        note : state.notes.find(note => note._id == props.match.params.note)
    }
}

export default connect(mapStateToProps)(NoteShow)