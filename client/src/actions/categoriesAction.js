import axios from 'axios'

export const setCategories = (categories) => {
    return {
        type : "SET_CATEGORIES",
        payload : categories
    }
}

export const startGetCategories = () => {
    return (dispatch) => {
        axios.get('http://localhost:3031/categories', {
            headers : {'x-auth' : localStorage.getItem('x-auth')}
        })
            .then(response => {
                console.log('categories',response.data)
                if(response.data.message){
                    alert(response.data.message)
                }else {
                    dispatch(setCategories(response.data))
                }
            })

            .catch(err => alert(err))
    }
}