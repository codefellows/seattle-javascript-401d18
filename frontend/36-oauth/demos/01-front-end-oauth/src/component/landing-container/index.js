import React from 'react'
import {connect} from 'react-redux'
import {stringify} from 'querystring'

class LandingContainer extends React.Component {
  render() {
    let googleLoginBaseUrl = 'https://accounts.google.com/o/oauth2/v2/auth'
    let googleLoginQuery = stringify({
      client_id: __GOOGLE_CLIENT_ID__,
      response_type: 'code',
      redirect_uri: `${__API_URL__}/oauth/google/code`,
      scope: 'openid profile email',
      prompt: __DEBUG__ ? 'consent' : undefined
    })

    let googleLoginUrl = `${googleLoginBaseUrl}?${googleLoginQuery}`

    return (
      <div>
        <h2>Login with Google</h2>
        <a href={googleLoginUrl}>Login with Googs</a>
      </div>
    )
  }
}

let mapStateToProps = state => ({})
let mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(LandingContainer)