import React from 'react'
import NoteForm from './NoteForm'
import { Container } from 'reactstrap'
import { startAddNotes, startEditNote } from '../../actions/notesAction'
import {connect} from 'react-redux'



class NoteCreate extends React.Component{

    headerStyle = {
        textAlign : "center"
    }

    handleSubmitNote = (formDate) => {
        console.log('data in ', formDate)

        const redirect = () => this.props.history.push('/notes')
        this.props.dispatch(startAddNotes(formDate, redirect))
    }
    
    render(){

        return(
            <div>
                <Container>
                    <br></br>
                <h1 className="display-4" style = {this.headerStyle} ><strong>Add Note</strong></h1>
                <br></br>
                <NoteForm handleSubmitNote = {this.handleSubmitNote} />
                </Container>
            </div>
        )
    }
}

export default connect()(NoteCreate)