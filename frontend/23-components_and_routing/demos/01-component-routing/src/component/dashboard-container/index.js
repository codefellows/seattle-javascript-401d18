import React from 'react'
import uuid from 'uuid/v4'
import ExpenseForm from '../expense-form'
import ExpenseList from '../expense-list'

class DashboardContainer extends React.Component {
  constructor(props) {
    super(props)
    this.expenseCreate = this.expenseCreate.bind(this)
  }

  componentDidUpdate() {
    console.log('__APP_STATE_FROM_DASHBOARD__', this.props.app.state)
  }

  expenseCreate(expense) {
    expense.id = uuid()
    this.props.app.setState(prevState => ({
      expenses: [...prevState.expenses, expense]
    }))
  }

  render() {
    return (
      <div className="dashboard-container">
        <h2>We're in the dashboard</h2>
        <ExpenseForm handleExpenseCreate={this.expenseCreate}/>
        <ExpenseList expenses={this.props.app.state.expenses}/>
      </div>
    )
  }
}

export default DashboardContainer