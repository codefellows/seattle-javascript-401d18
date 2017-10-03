import React from 'react'
import {connect} from 'react-redux'
import CategoryForm from '../category-form'
import {categoryUpdate, categoryDelete} from '../../action/category-actions'

class CategoryItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="category-item">
        <button onClick={() => this.props.categoryDelete(this.props.category)}>X</button>
        <h3>{this.props.category.title}</h3>
        <CategoryForm 
          buttonText="update"
          onComplete={this.props.categoryUpdate}
          category={this.props.category}/>
      </div>
    )
  }
}

let mapStateToProps = state => {
  return {
    categories: state,
  }
}
 
let mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryUpdate: category => dispatch(categoryUpdate(category)),
    categoryDelete: category => dispatch(categoryDelete(category)),
  }
}

export default connect(null, mapDispatchToProps)(CategoryItem)