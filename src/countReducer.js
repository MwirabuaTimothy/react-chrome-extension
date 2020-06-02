// Actions
export function countReset() {
  return { type: 'COUNT_RESET' }
}

export function countIncrease() {
  return { type: 'COUNT_INCREASE' }
}

export function countDecrease() {
  return { type: 'COUNT_DECREASE' }
}

// Reducer

export function count(state = 0, action) {
  let count = state
  switch(action.type) {
    case 'COUNT_INCREASE':
      console.log('COUNT_INCREASE', action)
      count += 1
      // sync.set({ count })
      return count
    case 'COUNT_DECREASE':
      console.log('COUNT_DECREASE', action)
      count -= 1
      // sync.set({ count })
      return count
    case 'COUNT_RESET':
      console.log('COUNT_RESET', action)
      count = 0
      // sync.set({ count })
      return count
    default:
      return count
  }
}