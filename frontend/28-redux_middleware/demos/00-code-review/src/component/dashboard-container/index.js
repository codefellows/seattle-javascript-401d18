import React from 'react'
import {connect} from 'react-redux'
import {categoryCreate} from '../../action/category-actions'
import CategoryForm from '../category-form'
import CategoryItem from '../category-item'

class DashboardContainer extends React.Component {
  componentDidMount() {
    console.log('__DASHBOARD__', this)
    this.props.categoryCreate({title: 'Star Wars'})
    this.props.categoryCreate({title: 'Dune'})
    this.props.categoryCreate({title: 'Star Trek'})
  }

  render() {
    return (
      <main className="main-content">
        <h2>Dashboard</h2>

        <CategoryForm 
          buttonText="create"
          onComplete={this.props.categoryCreate}/>

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
      </main>
    )
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories,
    cards: state.cards, // Don't need this yet, but for reference...
  }
}

const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryCreate: category => dispatch(categoryCreate(category)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)
