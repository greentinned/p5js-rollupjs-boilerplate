import 'p5'

window.setup = () => {
  createCanvas(windowWidth, windowHeight, WEBGL)
}

window.draw = () => {
  background(51)
}

window.windowResized = () => {
  resizeCanvas(windowWidth, windowHeight)
}
