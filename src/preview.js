// Stores the initial position of the cursor
let coord = { x: 0, y: 0 };

const channel = new BroadcastChannel("graffiti");
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

channel.addEventListener("message", (event) => {
  ctx.beginPath();

  ctx.lineWidth = 5;
  ctx.lineCap = "round";
  ctx.strokeStyle = "green";
  ctx.moveTo(coord.x, coord.y);

  // position from channel
  coord.x = event.data.x;
  coord.y = event.data.y;

  ctx.lineTo(coord.x, coord.y);
  ctx.stroke();
});
