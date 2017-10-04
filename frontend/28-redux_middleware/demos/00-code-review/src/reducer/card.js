let initialState = {}

export default (state=initialState, action) => {
  let {type, payload} = action
  let categoryId, categoryCards

  switch(type) {
    case 'CATEGORY_CREATE': return {...state, [payload.id]: []}
    case 'CATEGORY_DELETE': return {...state, [payload.id]: null}
    case 'CARD_CREATE': 
      categoryId = payload.categoryId
      categoryCards = state[categoryId]
      return {...state, [categoryId]: [...categoryCards, payload]}
    case 'CARD_UPDATE':
      let updateState = state
      categoryId = payload.categoryId
      updateState[categoryId] = updateState[categoryId].map(card => {
        if(card.id === payload.id) card = payload
        return card
      })
      return {...updateState}

    case 'CARD_DELETE':
      return
    default: return state
  }
}

// previous redux store => [Category {id, title,...}]

// redux store => {
//   categories: [{id: 123, title, timestamp}, {id: 456, title, timestamp}], // This is done in the category reducer
//   cards: {
//     123: [{...}, {...}], // this is done in the card reducer
//     456: [{...}]
//   }
// }