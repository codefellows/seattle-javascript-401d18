import React from 'react'
import ExpenseForm from '../expense-form'
import ExpenseList from '../expense-list'
import Modal from '../modal'

let renderIf = (test, component) => test ? component : undefined

class DashboardContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showErrors: false,
    }
  }

  componentDidUpdate() {
    console.log('__DASHBOARD_STATE', this.props.app.state)
  }

  render() {
    let totalSpend = this.props.app.state.expenses.reduce((a, b) => a + parseInt(b.price), 0)
    let remainingBudget = this.props.app.state.budget - totalSpend

    return (
      <div className="dashboard-container">
        <h2>Welcome to the Expense Tracker App</h2>
        
        <aside>
          <p>Total Budget: {this.props.app.state.budget}</p>
          <p>Total Spend: {totalSpend}</p>
          <p>Remaining Budget: {remainingBudget}</p>
        </aside>

        <ExpenseForm app={this.props.app}/>
        <ExpenseList app={this.props.app}/>

        {renderIf(remainingBudget < 0 && !this.state.showErrors,
          <Modal close={() => this.setState({showErrors: !this.state.showErrors})}> 
            <h1>Sorry, you have used all of your available funds</h1>
            <p>Current Balance: {remainingBudget}</p>
          </Modal>
        )}
      </div>
    )
  }
}

export default DashboardContainer