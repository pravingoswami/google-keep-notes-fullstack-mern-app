import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import CategoryForm from './CategoryForm'

function CategoriesList(props){
    return(
        <div>
            <h1>Categories </h1>
    <h2>categories - {props.categories && props.categories.length}</h2>
    {
        props.categories && (
            <ol>
                {
                    props.categories.map(cat => <li>{cat.name} &nbsp;&nbsp;
                    <Link><button>view detail</button></Link>&nbsp;&nbsp;
                    <button>remove</button>&nbsp;&nbsp;
                    
                     </li>)
                }
            </ol>
        )
    }
<br></br>
<br></br>
    <h1> Add Category</h1>
    <CategoryForm  />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        categories : state.categories
    }
}

export default connect(mapStateToProps)(CategoriesList)