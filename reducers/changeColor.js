import { CHANGE_COLOR } from '../constants'

const N = 11;
var initialState = {
  board: Array.apply(null, {length: N}).map((a)=>Array.apply(null, {length: N}).map((o)=>'#FFFFFF'))
}

export default function update(state = initialState, action) {
  if(action.type === CHANGE_COLOR) {
    state.board[action.y][action.x] = action.color;
    return state
  }
  return state
}
