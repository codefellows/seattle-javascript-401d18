import React from 'react'

class ExpenseList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      expenseList: this.props.expenses.map(item => <li key={item.id}>{item.title}: {item.price}</li>)
    }
  }

  render() {
    return (
      <div className="expense-list">
        {this.state.expenseList ?
          <ul>
            {this.state.expenseList}
          </ul> :
          <h2>There are no expenses</h2>
        }
      </div>
    )
  }
}

export default ExpenseList