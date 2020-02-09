import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import axios from 'axios'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import { setUser } from './actions/usersAction';
import { startGetCategories } from './actions/categoriesAction';
import { startGetNotes } from './actions/notesAction';

// import {startGetUsers} from './actions/usersAction'

const store = configureStore()

store.subscribe(() => {
    console.log(store.getState())
})

// store.dispatch(startGetUsers())

if(localStorage.getItem('x-auth')){
    axios.get('http://localhost:3031/users/account',{
         headers: {
                 'x-auth': localStorage.getItem('x-auth')
         }
    })
    .then(response=>{
        console.log('index.jssjsjlfelhef',response.data)
            // const user = response.data
            const user = response.data
            // store.dispatch(setUser(user))
            store.dispatch(startGetCategories())
            store.dispatch(startGetNotes())
            // store.dispatch(startSetCustomers())
            // store.dispatch(startSetDepartments())
            // store.dispatch(startSetEmployees())
            // store.dispatch(startSetTickets())     
    })             
}

console.log(store.getState())

const jsx = (
    <Provider store = {store}>
        <App />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'));

