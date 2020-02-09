import React from 'react'
import { connect } from 'react-redux'

function CategoriesList(props){
    return(
        <div>
            <h1>Categories </h1>
    <h2>categories - {props.categories && props.categories.length}</h2>
    {
        props.categories && (
            <ol>
                {
                    props.categories.map(cat => <li>{cat.name}</li>)
                }
            </ol>
        )
    }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        categories : state.categories
    }
}

export default connect(mapStateToProps)(CategoriesList)