import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import { startRemoveNote, startEditNote } from '../../actions/notesAction'
import { Button } from 'reactstrap';


function NoteArchived(props){

const handleRemoveNote = (id) => {
    console.log('note',id)
    const confirm = window.confirm("are you sure?")
    confirm &&  props.dispatch(startRemoveNote(id))
}

const handleEditNotePin = (id, pinned) => {
    props.dispatch(startEditNote(id, {'pinned' : !pinned}))
}

const handleEditNoteArchived = (id, archived) => {
    props.dispatch(startEditNote(id, {'archived' : !archived}))
}

const handleEditNoteBin = (id, bin) => { 
    props.dispatch(startEditNote(id, {'bin' : !bin}))
}

    return(
        <div>
            {/* <h1>Notes </h1> */}
            <h1>Notes &nbsp; &nbsp;  <Link to = "/notes" > <Button color="primary" >List</Button>{' '}</Link>
             <Link to = "/notes/note-archived" > <Button color="primary" >Archived</Button>{' '}</Link>
             <Link to = "/notes/note-bin" > <Button color="primary" >Bin</Button>{' '}</Link></h1>
            <h2> Notes - {props.notes.length}</h2>


            {

            }

            {
                props.notes && (
 
                    <ol>
                        {
                            props.notes.map(note => <li 
                                key = {note._id} >
                                    {note.title} 
                                    <button>&nbsp;
                                    <Link to = 
                                {`/notes/note-detail/${note._id}`} 

                                >
                                    Detail
                                    </Link>
                                    </button> &nbsp;
                                    &nbsp;{
                                        note.pinned ? <button onClick = {() => handleEditNotePin(note._id, note.pinned)} >Pin</button> : <button onClick = {() => handleEditNotePin(note._id, note.pinned)} >Unpin</button>
                                    }&nbsp;&nbsp;
                                    &nbsp;{
                                        note.archived ? <button onClick = {() => handleEditNoteArchived(note._id, note.archived)} >undo Archived</button> : <button onClick = {() => handleEditNoteArchived(note._id, note.archived)} >Archived</button>
                                    }&nbsp;&nbsp;
                                     &nbsp;{
                                        note.bin ? <button onClick = {() => handleEditNoteBin(note._id, note.bin)} >undo Bin</button> : <button onClick = {() => handleEditNoteBin(note._id, note.bin)} >Bin</button>
                                    }&nbsp;&nbsp;
                                       &nbsp;{
                                           
                                    }&nbsp;&nbsp;
                                    <button onClick = {() => handleRemoveNote(note._id)} >
                                        remove
                                        </button> 
                                        </li>)
                        }
                    </ol>
                )
            }
            <Link to = "/notes/add-notes" ><button>Add Note</button></Link>
        </div>
    )
}

const mapstatetoProps = (state) => {
    let notes = state.notes.sort((a, b) => a.pinned - b.pinned).filter(note => note.bin == true)
    // notes =  state.notes.sort((a, b) => a.pinned - b.pinned).filter(note => note.archived == false)
    return {
        notes : notes
    }
}

export default connect(mapstatetoProps)(NoteArchived)