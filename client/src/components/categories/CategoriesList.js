import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import CategoryForm from './CategoryForm'
import { startRemoveCategory, startAddCategory } from '../../actions/categoriesAction'

function CategoriesList(props){

const handleSubmit = (formData) => {
    console.log(formData)
    props.dispatch(startAddCategory(formData))
}

const hanldeRemove = (id) => {
    props.dispatch(startRemoveCategory(id))
}



    return(
        <div>
            <h1>Categories </h1>
    <h2>categories - {props.categories && props.categories.length}</h2>
    {
        props.categories && (
            <ol>
                {
                    props.categories.map(cat => <li>{cat.name} &nbsp;&nbsp;
                    <Link to = {`/categories/category-detail/${cat._id}`} ><button>view detail</button></Link>&nbsp;&nbsp;
                    <button onClick = {() => hanldeRemove(cat._id)} >remove</button>&nbsp;&nbsp;
                    
                     </li>)
                }
            </ol>
        )
    }
<br></br>
<br></br>
    <h1> Add Category</h1>
    <CategoryForm  handleSubmit = {handleSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        categories : state.categories
    }
}

export default connect(mapStateToProps)(CategoriesList)