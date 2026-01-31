function returnToSilence() {
  const now = Date.now();

  if (presence && now - lastSignalTime > 2200) {
    presence = false;

    field.style.transform = "translate(-50%, -50%)";
    field.style.opacity = 0.35;
  }

  requestAnimationFrame(returnToSilence);
}

returnToSilence();
