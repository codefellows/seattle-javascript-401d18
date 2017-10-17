import React from 'react'
import {connect} from 'react-redux'
import * as utils from '../../lib/util'
import LandingContainer from '../landing-container'
import {BrowserRouter, Route} from 'react-router-dom'

class App extends React.Component {
  componentDidMount() {
    let token = utils.cookieFetch('X-Slugchat-Token')
    // set the token into state
  }

  render() {
    return (
      <BrowserRouter>
        <section>
          <Route exact path="/" component={LandingContainer} />
        </section>
      </BrowserRouter>
    )
  }
}

let mapStateToProps = state => ({})
let mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(App)