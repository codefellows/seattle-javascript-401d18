import superagent from 'superagent'

export const childSet = children => ({
  type: 'CHILD_SET',
  payload: children,
})

export const childCreate = child => ({
  type: 'CHILD_CREATE',
  payload: child,
})

export const childUpdate = child => ({
  type: 'CHILD_UPDATE',
  payload: child,
})

export const childDelete = child => ({
  type: 'CHILD_DELETE',
  payload: child,
})

export const childError = err => ({
  type: 'CHILD_ERROR',
  payload: err,
})

export const childrenFetchRequest = () => dispatch => {
  // make a superagent req to the backend
  // on success dispatch the childSet action creator defined above
  // on error log out the issue
  return superagent.get(`${__API_URL__}/api/child`)
  .then(res => {
    console.log(res.body)
    dispatch(childSet(res.body))
    return res
  })
  .catch(console.error)
}

export const childCreateRequest = child => dispatch => {
  return superagent.post(`${__API_URL__}/api/child`)
  .send(child)
  .then(res => {
    console.log(res.body) // => {_id: 1234, name: 'watman', createdAt: 'xxx', updatedAt: 'yyy'}
    dispatch(childCreate(res.body))
    return res
  })
  .catch(console.error)
}

export const childUpdateRequest = child => dispatch => {
  return superagent.put(`${__API_URL__}/api/child/${child._id}`)
  .send(child)
  .then(res => {
    dispatch(childUpdate(child))
    return res
  })
  .catch(console.error)
}

export const childDeleteRequest = (child) => (dispatch) => {
  return superagent.delete(`${__API_URL__}/api/child/${child._id}`)
  .then(res => {
    dispatch(childDelete(child))
    return res
  })
  .catch(console.error)
}