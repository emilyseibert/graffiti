// Stores the initial position of the cursor
let coord = { x: null, y: null };

const channel = new BroadcastChannel("graffiti");
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

const draw = (channelCoords) => {
  ctx.beginPath();

  ctx.lineWidth = 5;
  ctx.lineCap = "round";
  ctx.strokeStyle = "green";
  if (coord.x) {
    ctx.moveTo(coord.x, coord.y);
  } else {
    ctx.moveTo(channelCoords.x, channelCoords.y);
  }

  // update coords to be channelCoords
  coord.x = channelCoords.x;
  coord.y = channelCoords.y;

  ctx.lineTo(coord.x, coord.y);
  ctx.stroke();
};
channel.addEventListener("message", (event) => {
  // if data is null, then mouseup has fired. reset coords.
  if (!event.data) {
    coord.x = null;
    coord.y = null;
  } else {
    draw(event.data);
  }
});
