import uuid from 'uuid/v4'

export const cardCreate = card => {
  card.id = uuid()
  card.timestamp = new Date()
  return {
    type: 'CARD_CREATE',
    payload: card
  }
}

export const cardUpdate = card => {
  return {
    type: 'CARD_UPDATE',
    payload: card
  }
}

export const cardDelete = card => {
  return {
    type: 'CARD_DELETE',
    payload: card
  }
}