import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import CategoryForm from './CategoryForm'
import { startEditCategory } from '../../actions/categoriesAction'

class CategoryEdit extends React.Component{

    handleSubmit = (formData) => {
        const redirect = () => this.props.history.push(`/categories/category-detail/${this.props.match.params.category}`)
        this.props.dispatch(startEditCategory(this.props.match.params.category, formData, redirect))
    }   

    render(){
        return(
            <div>
                <h1>Edit Category</h1>
                <br></br>
                <br></br>
                <br></br>
                <CategoryForm handleSubmit = {this.handleSubmit} category = {this.props.match.params.category}/>
            </div>
        )
    }
}

// const mapStateToProps = (state, props) => {
//     return {
//         category : state.categories.find(cat => cat._id == props.match.params.category)
//     }
// }

export default connect()(CategoryEdit)