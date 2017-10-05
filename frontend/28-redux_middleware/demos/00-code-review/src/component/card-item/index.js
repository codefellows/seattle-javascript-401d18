import React from 'react'
import {connect} from 'react-redux'
import CardForm from '../card-form'
import {cardUpdate, cardDelete} from '../../action/card-actions'

class CardItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editCard: false,
    }
    this.toggleCard = this.toggleCard.bind(this)
  }

  toggleCard() {
    this.setState({editCard: !this.state.editCard})
  }

  render() {
    return (
      <section className="card-item" id={this.props.card.id}>
        <button className="remove" onClick={() => this.props.cardDelete(this.props.card)}>x</button>
        <button onClick={this.toggleCard}>edit card</button>
        <h2>{this.props.card.title}</h2>
        <p>{this.props.card.content}</p>

        {this.state.editCard ? 
          <CardForm 
            buttonText="update"
            toggle={this.toggleCard}
            onComplete={this.props.cardUpdate}
            card={this.props.card}/>
          :
          undefined
        } 
      </section>
    )
  }
}

let mapStateToProps = () => ({})
let mapDispatchToProps = (dispatch, getState) => {
  return {
    cardUpdate: card => dispatch(cardUpdate(card)),
    cardDelete: card => dispatch(cardDelete(card)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardItem)
