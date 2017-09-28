import React from 'react'

class ExpenseList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      expenseList: this.props.app.state.expenses
    }
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete(e, id) {
    this.props.app.setState(prevState => ({
      expenses: prevState.expenses.filter(expense => expense.id !== id)
    }))
  }

  render() {
    return (
      <div className="expense_list">
        {this.state.expenseList.length ?
          <ul>
            {this.state.expenseList
              .map(expense => <li key={expense.id}>{expense.title}: {expense.price}<button onClick={(event) => this.handleDelete(event, expense.id)}>x</button></li>)}
          </ul> :
          <h2>There are no expenses...</h2>
        }
      </div>
    )
  }
}

export default ExpenseList