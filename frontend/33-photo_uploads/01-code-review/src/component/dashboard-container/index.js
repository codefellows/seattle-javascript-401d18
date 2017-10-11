import React from 'react'
import {connect} from 'react-redux'
import * as utils from '../../lib/utils'

class DashboardContainer extends React.Component {
  componentWillMount() {
    this.props.auth ? undefined : this.props.history.replace('/')
  }

  render() {
    return (
      <div>
        <h2>I are Dashboard</h2>
      </div>
    )
  }
}

let mapStateToProps = state => ({
  auth: state.auth,
})

let mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)