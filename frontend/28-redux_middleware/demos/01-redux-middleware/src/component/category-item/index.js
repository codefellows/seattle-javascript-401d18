import React from 'react'
import {connect} from 'react-redux'
import CardItem from '../card-item'
import CardForm from '../card-form'
import CategoryForm from '../category-form'
import {cardCreate} from '../../action/card-actions'
import {categoryUpdate, categoryDelete} from '../../action/category-actions'

class CategoryItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cardForm: false,
      categoryForm: false,
    }

    this.toggleCard = this.toggleCard.bind(this)
    this.toggleCategory = this.toggleCategory.bind(this)
  }

  toggleCard() {
    this.setState({cardForm: !this.state.cardForm})
  }
  
  toggleCategory() {
    this.setState({categoryForm: !this.state.categoryForm})
  }

  componentDidUpdate() {
    console.log('scott was here')
  }

  render() {
    return (
      <div className="category-item">
        <div className="content-container">
          <button className="remove" onClick={() => this.props.categoryDelete(this.props.category)}>X</button>
          <button onClick={this.toggleCategory}>edit category</button>
          <button onClick={this.toggleCard}>new card</button>
          <h3>{this.props.category.title}</h3>

          {this.state.categoryForm ? 
            <CategoryForm 
              buttonText="update"
              onComplete={this.props.categoryUpdate}
              category={this.props.category}
              toggle={this.toggleCategory}/> :
            undefined
          }
        </div>
        <div className="content-container">
          {this.state.cardForm ? 
            <CardForm 
              buttonText="create"
              categoryId={this.props.category.id}
              onComplete={this.props.cardCreate}
              toggle={this.toggleCard}/> :
            undefined
          }

          {this.props.cards[this.props.category.id].length ? 
            this.props.cards[this.props.category.id].map(card => <CardItem key={card.id} card={card}/>)
            :
            <h3>currently no cards</h3>
          }
        </div>
      </div>
    )
  }
}

let mapStateToProps = state => {
  return {
    cards: state.cards,
  }
}
 
let mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryUpdate: category => dispatch(categoryUpdate(category)),
    categoryDelete: category => dispatch(categoryDelete(category)),
    cardCreate: card => dispatch(cardCreate(card)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem)