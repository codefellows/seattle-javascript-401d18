import React from 'react'

class ExpenseUpdateForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.expense.id,
      title: this.props.expense.title,
      price: this.props.expense.price,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.app.setState(prevState => ({
      expenses: prevState.expenses.map(expense => {
        if(expense.id === this.state.id) expense = this.state
        return expense
      })
    }))
    this.props.toggle()
  }

  render() {
    return (
      <form 
        className="update-form"
        onSubmit={this.handleSubmit}>

        <input 
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.handleChange}/>

        <input 
          type="number"
          name="price"
          value={this.state.price}
          onChange={this.handleChange}/>

        <button type="Submit">update</button>
      </form>
    )
  }
}

export default ExpenseUpdateForm