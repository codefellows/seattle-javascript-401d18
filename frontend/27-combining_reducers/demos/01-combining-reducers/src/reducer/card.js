let initialState = {}

export default (state=initialState, action) => {
  let {type, payload} = action

  switch(type) {
    case 'CATEGORY_CREATE': return {...state, [payload.id]: []}
    case 'CATEGORY_DELETE': return {...state, [payload.id]: null}
    case 'CARD_CREATE': 
      let {categoryId} = payload
      let categoryCards = state[categoryId]
      return {...state, [categoryId]: [...categoryCards, payload]}
    default: return state
  }
}

// previous redux store => [Category {id, title,...}]

// redux store => {
//   categories: [{id: 123, title, timestamp}], // This is done in the category reducer
//   cards: {
//     123: [], // this is done in the card reducer
//   }
// }