import React from 'react'
import {connect} from 'react-redux'
import ChildForm from '../child-form'
import {
  childDeleteRequest, 
  childUpdateRequest} from '../../action/child-actions'

class ChildItem extends React.Component {
  constructor(props) {
    super(props)
    console.log('__ITEM_PROPS__', props)
  }

  render() {
    return (
      <div className="child-items">
        <p>{this.props.child.name}</p>
        <button onClick={() => this.props.childDelete(this.props.child)}>x</button>
        <ChildForm 
          onComplete={this.props.childUpdate}
          child={this.props.child}
          buttonText="update"/>
      </div>
    )
  }
}

let mapStateToProps = () => ({})
let mapDispatchToProps = dispatch => ({
  childDelete: child => dispatch(childDeleteRequest(child)),
  childUpdate: child => dispatch(childUpdateRequest(child)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ChildItem)