import superagent from 'superagent'
import * as utils from '../lib/util'

export const login = token => ({
  type: 'LOGIN',
  payload: token,
})

export const logout = () => {
  utils.cookieDelete('X-Slugchat-Token')

  return {
    type: 'LOGOUT',
  }
}
