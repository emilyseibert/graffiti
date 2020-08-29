// Stores the initial position of the cursor
let coord = { x: null, y: null };

const channel = new BroadcastChannel("graffiti");
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

const draw = (channelCoords) => {
  if (!coord.x) {
    // set the new "moveTo" coords. since we're using channelCoords, we have nothing to lineTo. return early.
    coord.x = channelCoords.x;
    coord.y = channelCoords.y;
    return;
  }

  if (!channelCoords.x) {
    // we have previous coords, but we're registering a line break.
    // reset the line back to null and return early.
    coord.x = null;
    coord.y = null;
    return;
  }

  // original logic from: https://www.geeksforgeeks.org/how-to-draw-with-mouse-in-html-5-canvas/
  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.lineCap = "round";
  // ctx.strokeStyle = "green";
  ctx.moveTo(coord.x, coord.y);

  // update coords to be channelCoords
  coord.x = channelCoords.x;
  coord.y = channelCoords.y;

  ctx.lineTo(coord.x, coord.y);
  ctx.stroke();
};

channel.addEventListener("message", (event) => {
  // if data at x coord is null, then mouseup has fired. reset coords.
  if (Array.isArray(event.data)) {
    event.data.forEach((pos) => draw(pos));
  }
  if (event.data === "clear") {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  } else {
    draw(event.data);
  }
});

window.addEventListener("unload", () => {
  channel.close();
});
