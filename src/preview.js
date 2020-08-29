window.addEventListener("load", () => {
  console.log("successfully loaded preview JS page");
});

const channel = new BroadcastChannel("graffiti");

channel.addEventListener("message", (event) => {
  console.log("event.data", event.data);
});
