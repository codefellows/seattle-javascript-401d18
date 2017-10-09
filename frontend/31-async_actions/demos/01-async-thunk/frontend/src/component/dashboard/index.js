import React from 'react'
import {connect} from 'react-redux'
import ChildForm from '../child-form'
import * as util from '../../lib/util'
import * as childActions from '../../action/child-actions'

class Dashboard extends React.Component {
  componentWillMount() {
    this.props.childrenFetch()
    console.log('', this.props)
  }


  render() {
    return (
      <div className="dashboard">
        <h2>Child/Toy Manager</h2>
        <ChildForm 
          onComplete={this.props.childCreate}
          buttonText="create child"/>

        {this.props.children.map(child => 
          <div key={child._id}>
            <p>{child.name}</p>
            <button onClick={() => this.props.childDelete(child)}>x</button>
          </div>
        )}
      </div>
    )
  }
}

let mapStateToProps = state => ({children: state.children})
let mapDispatchToProps = dispatch => ({
  childCreate: child => dispatch(childActions.childCreateRequest(child)),
  childDelete: child => dispatch(childActions.childDeleteRequest(child)),
  childrenFetch: () => dispatch(childActions.childrenFetchRequest()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)