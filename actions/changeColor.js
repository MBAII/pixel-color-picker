import { CHANGE_COLOR } from '../constants'

export function changeColor(x, y, color) {
  return {
    type: CHANGE_COLOR,
    x: x,
    y: y,
    color: color,
  }
}
