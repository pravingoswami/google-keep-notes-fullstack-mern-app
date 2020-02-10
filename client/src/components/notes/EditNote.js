import React from 'react'
import NoteForm from './NoteForm'
import { Container } from 'reactstrap'
import { startEditNote } from '../../actions/notesAction'
import {connect} from 'react-redux'



class EditNote extends React.Component{

    headerStyle = {
        textAlign : "center"
    }

    handleSubmitNote = (formDate) => {
        console.log('data in ', formDate)
        const redirect = () => this.props.history.push(`/notes/note-detail/${this.props.match.params.note}`)
        this.props.dispatch(startEditNote(this.props.match.params.note,formDate,redirect))
    }
    
    render(){

        return(
            <div>
                <Container>
                    <br></br>
                <h1 className="display-4" style = {this.headerStyle} ><strong>Add Create</strong></h1>
                <br></br>
                <NoteForm handleSubmitNote = {this.handleSubmitNote} note = {this.props.match.params.note} />
                </Container>
            </div>
        )
    }
}

export default connect()(EditNote)