// Stores the initial position of the cursor
let coord = { x: null, y: null };

const channel = new BroadcastChannel("graffiti");
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

const draw = (channelCoords) => {
  if (!channelCoords.x) {
    coord.x = null;
    coord.y = null;
    return;
  }

  // original logic from: https://www.geeksforgeeks.org/how-to-draw-with-mouse-in-html-5-canvas/
  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.lineCap = "round";
  ctx.strokeStyle = "green";

  // if previous coord.x is null, then we've registered line break.
  // use same coords for both before & after of stroke to begin a new line
  if (coord.x) {
    ctx.moveTo(coord.x, coord.y);
  } else {
    console.log("line break!", channelCoords);
    ctx.moveTo(channelCoords.x, channelCoords.y);
  }

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
  } else {
    draw(event.data);
  }
});

window.addEventListener("unload", () => {
  channel.close();
});
