export default store => next => action => {
  console.log('__THUNK_ACTION__', action)
  return typeof action === 'function' ?
  action(store.dispatch, store.getState) :
  next(action)
}