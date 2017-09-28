import React from 'react'
import uuid from 'uuid/v4'

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: uuid(),
      title: '',
      price: 0,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.app.setState(prevState => ({
      expenses: [...prevState.expenses, this.state]
    }))
  }

  render() {
    return (
      <form
        className="expense-form"
        onSubmit={this.handleSubmit}>

        <input 
          type="text"
          name="title"
          placeholder="title"
          value={this.state.title}
          onChange={this.handleChange}/>

        <input 
          type="number"
          name="price"
          placeholder="price"
          value={this.state.price}
          onChange={this.handleChange}/>
          
        <button type="submit">+</button>
      </form>
    )
  }
}

export default ExpenseForm