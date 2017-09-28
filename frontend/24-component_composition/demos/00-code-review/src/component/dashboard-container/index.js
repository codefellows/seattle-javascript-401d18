import React from 'react'
import ExpenseForm from '../expense-form'
import ExpenseList from '../expense-list'


class DashboardContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidUpdate() {
    console.log('__DASHBOARD_STATE', this.props.app.state)
  }

  render() {
    return (
      <div className="dashboard-container">
        <h2>Welcome to the Expense Tracker App</h2>
        <ExpenseForm app={this.props.app}/>
        <ExpenseList app={this.props.app}/>
      </div>
    )
  }
}

export default DashboardContainer