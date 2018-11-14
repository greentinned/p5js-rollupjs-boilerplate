/**
 * Global
 */

let font

/**
 * Lifecycle
 */

function preload() {
  font = loadFont('assets/Akrobat-Bold.otf')
}

function setup(state) {
  createCanvas(windowWidth, windowHeight, WEBGL)
  state = {
    fps: 0
  }
}

function update(state) {
  state.fps = round(frameRate())
}

function draw(state) {
  background(50)
  drawFPS(state)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}

/**
 * User
 */

function drawFPS(state) {
  fill(255)
  textFont(font)
  let x = -width / 2 + 10
  let y = -height / 2 + 20
  text(`FPS: ${state.fps}`, x, y)
}

export { preload, setup, update, draw, windowResized }
