const categoriesInitialState = []

const categoriesReducers = (state = categoriesInitialState , action) => {
    switch(action.type) {

        case 'SET_CATEGORIES' : {
            return [...state, ...action.payload]
        }

        default : {
            return [...state]
        }
    }
}

export default categoriesReducers