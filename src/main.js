import 'p5'
import { preload, setup, update, draw, windowResized } from './sketch'

/**
 * Global
 */

let state = {}

/**
 * Lifecycle
 */

window.preload = preload

window.setup = () => {
  setup(state)
}

window.draw = () => {
  update(state)
  draw(state)
}

window.windowResized = windowResized
