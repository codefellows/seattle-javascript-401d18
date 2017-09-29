import React from 'react'
import ExpenseUpdateForm from '../expense-update-form'

class ExpenseList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      expenseList: this.props.app.state.expenses,
      expenseEdit: false,
    }
    this.handleDelete = this.handleDelete.bind(this)
    this.toggleUpdate = this.toggleUpdate.bind(this)
  }

  handleDelete(e, id) {
    this.props.app.setState(prevState => ({
      expenses: prevState.expenses.filter(expense => expense.id !== id)
    }))
  }

  toggleUpdate(e) {
    console.log(e.target)
    this.setState({expenseEdit: !this.state.expenseEdit})
  }

  render() {
    return (
      <div className="expense_list">
        {this.state.expenseList.length ?
          <ul>
            {this.state.expenseList
              .map(expense => 
                <li key={expense.id}>
                  {expense.title}: {expense.price}
                  <button onClick={(event) => this.handleDelete(event, expense.id)}>x</button>
                  <button key={expense.id} onClick={this.toggleUpdate}>edit</button>
                  {this.state.expenseEdit ?
                    <ExpenseUpdateForm 
                      key={expense.id}
                      expense={expense}
                      app={this.props.app}
                      toggle={this.toggleUpdate}/> :
                    undefined
                  }
                </li>)}
          </ul> :
          <h2>There are no expenses...</h2>
        }
      </div>
    )
  }
}

export default ExpenseList