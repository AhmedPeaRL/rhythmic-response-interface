const field = document.getElementById("field");

let presence = false;
let lastSignalTime = 0;

function allowPresence() {
  presence = true;
  lastSignalTime = Date.now();
}
