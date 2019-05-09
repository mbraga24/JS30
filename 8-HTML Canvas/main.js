const canvas = document.querySelector('#draw');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
context.strokeStyle = '#BADA55';
context.lineJoin = 'round';
context.lineCap = 'round';
context.lineWidth = 100;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;

function draw(e) {
  console.log(e)
  if (!isDrawing) return; // Will stop the function from running when they are not moused down.
  context.strokeStyle = `hsl(${hue}, 100%, 50%)`
  context.beginPath();
  // START FROM.
  context.moveTo(lastX, lastY)
  // GO TO.
  context.lineTo(e.offsetX, e.offsetY)
  // Draws on the page.
  context.stroke();

  // Update the last X and last Y position.
  lastX = e.offsetX;
  lastY = e.offsetY;
  hue++;
  if (hue >= 360) {
    hue = 0;
  }
  console.log(hue)
}
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true
  lastX = e.offsetX;
  lastY = e.offsetY;
  // console.log(lastX)
  // console.log(lastY)
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

/*
Canvas API
HTMLCanvasElement.getContext()
CanvasRenderingContext2D()
CanvasRenderingContext2D.strokeStyle
Canvas​Rendering​Context2D.line​Join
CanvasRenderingContext2D.lineCap
Canvas​Rendering​Context2D.begin​Path()
CanvasRenderingContext2D.moveTo()
Canvas​Rendering​Context2D.lineTo()


*/
