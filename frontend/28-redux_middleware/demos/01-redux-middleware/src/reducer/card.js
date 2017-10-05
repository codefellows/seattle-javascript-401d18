let cardValidate = card => {
  let {id, categoryId, title, content, timestamp} = card
  if(!id || !categoryId || !title || !content || !timestamp) {
    throw new Error('VALIDATION FAILED: Card must contain id, catId, title, ...')
  }
}

let initialState = {}

export default (state=initialState, action) => {
  let {type, payload} = action
  
  switch(type) {
    case 'CATEGORY_CREATE': 
      return {...state, [payload.id]: []}
    case 'CATEGORY_DELETE': 
      return {...state, [payload.id]: null}
    
    case 'CARD_CREATE': 
      cardValidate(payload)
      let categoryCards = state[payload.categoryId]
      return {...state, [payload.categoryId]: [...categoryCards, payload]}
    
    case 'CARD_UPDATE':
      cardValidate(payload)
      let updateState = state
      updateState[payload.categoryId] = updateState[payload.categoryId].map(card => {
        if(card.id === payload.id) card = payload
        return card
      })
      return {...updateState}
    
    case 'CARD_DELETE':
      cardValidate(payload)
      let deleteState = state
      deleteState[payload.categoryId] = deleteState[payload.categoryId].filter(card => card.id !== payload.id)
      return {...deleteState}
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