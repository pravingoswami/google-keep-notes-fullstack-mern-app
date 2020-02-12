import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class CategoryView extends React.Component{

    render(){
        return(
            <div>
                <h1>{this.props.match.params.category}</h1>
                <br></br>
                <h2>{this.props.category && this.props.category.name}</h2>
                <br></br>
                <br></br>
                <Link to = {`/categories/category-edit/${this.props.match.params.category}`} ><button >edit category</button></Link>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        category : state.categories.find(cat => cat._id == props.match.params.category)
    }
}

export default connect(mapStateToProps)(CategoryView)