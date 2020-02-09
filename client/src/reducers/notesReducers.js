const notesInitialState = []

const notesReducers = (state = notesInitialState , action) => {
    switch(action.type) {

        case 'SET_NOTES' : {
            return [...state, ...action.payload]
        }

        case 'ADD_NOTE' : {
            return [...state, action.payload]
        }

        case 'REMOVE_NOTE' : {
            return state.filter(note => note._id != action.payload)
        }

        default : {
            return [...state]
        }
    }
}

export default notesReducers