import React from 'react'
import { connect } from 'react-redux'

function NoteShow(props){
    return(
        <div>
            <h1>{props.match.params.note}</h1>
    {
        props.note && (
            <div>
                <h2>{props.note.title}</h2>
                <h2>{props.note.description}</h2>
            </div>
        )
    }

    
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        note : state.notes.find(note => note._id == props.match.params.note)
    }
}

export default connect(mapStateToProps)(NoteShow)