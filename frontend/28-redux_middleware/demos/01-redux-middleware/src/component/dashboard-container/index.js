import React from 'react'
import {connect} from 'react-redux'
import CategoryForm from '../category-form'
import CategoryItem from '../category-item'
import {categoryCreate} from '../../action/category-actions'

class DashboardContainer extends React.Component {
  componentDidMount() {
    console.log('__DASHBOARD__', this)
    this.props.categoryCreate({title: 'Star Wars'})
    // this.props.categoryCreate({title: 'Dune'})
    // this.props.categoryCreate({title: 'Star Trek'})
  }

  render() {
    return (
      <main className="main-content">
        <h2>Dashboard</h2>

        <CategoryForm 
          buttonText="create"
          toggle={() => {}}
          onComplete={this.props.categoryCreate}/>

        <div className="category-container">
          {this.props.categories.length ?
            <div>
              {this.props.categories.map(item => {
                return <CategoryItem 
                          key={item.id}
                          category={item}/>
              })}
            </div> :
            <h2>Add some categories</h2>
          }
        </div>
      </main>
    )
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories,
  }
}

const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryCreate: category => dispatch(categoryCreate(category)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)
