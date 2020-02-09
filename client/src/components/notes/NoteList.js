import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import { startRemoveNote } from '../../actions/notesAction'


function NoteList(props){

const handleRemoveNote = (id) => {
    console.log('note',id)
    const confirm = window.confirm("are you sure?")
    confirm &&  props.dispatch(startRemoveNote(id))
}
    return(
        <div>
            <h1>Ticket </h1>
            <h2> ticket - {props.notes.length}</h2>
            {
                props.notes && (
 
                    <ol>
                        {
                            props.notes.map(note => <li key = {note._id} >{note.title} <button><Link to = {`/notes/note-detail/${note._id}`} >Detail</Link></button> <button onClick = {() => handleRemoveNote(note._id)} >remove</button> </li>)
                        }
                    </ol>
                )
            }
            <Link to = "/notes/add-notes" ><button>Add Note</button></Link>
        </div>
    )
}

const mapstatetoProps = (state) => {
    return {
        notes : state.notes
    }
}

export default connect(mapstatetoProps)(NoteList)