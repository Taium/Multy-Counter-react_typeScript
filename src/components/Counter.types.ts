 export type UpdateAction = {
    type: 'increment' | 'decrement' |'addcounter'
    payload?: number
  }