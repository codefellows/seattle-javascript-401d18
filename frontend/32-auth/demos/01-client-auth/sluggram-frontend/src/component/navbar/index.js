import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {tokenDelete} from '../../action/auth-actions'

class Navbar extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            {this.props.auth ?
              <li onClick={this.props.tokenDelete}><Link to="/">Logout</Link></li> :
              <div>
                <li><Link to="/welcome/signup">Signup</Link></li>
                <li><Link to="/welcome/login">Login</Link></li>
              </div>
            }
          </ul>
        </nav>
      </header >
    )
  }
}

let mapStateToProps = state => ({
  auth: state.auth
})

let mapDispatchToProps = dispatch => ({
  tokenDelete: () => dispatch(tokenDelete()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
