import React from 'react'
import {connect} from 'react-redux'
import ChildForm from '../child-form'
import ChildItem from '../child-item'
import * as util from '../../lib/util'
import * as childActions from '../../action/child-actions'

class Dashboard extends React.Component {
  componentWillMount() {
    this.props.childrenFetch()
  }


  render() {
    return (
      <div className="dashboard">
        <h2>Child/Toy Manager</h2>
        <ChildForm 
          onComplete={this.props.childCreate}
          buttonText="create child"/>

        {util.renderIf(this.props.children.length, 
          <div>
            {this.props.children.map(item => <ChildItem key={item._id} child={item}/>)}
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