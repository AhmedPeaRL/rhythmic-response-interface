document.addEventListener("mousemove", (e) => {
  allowPresence();

  const dx = e.clientX - window.innerWidth / 2;
  const dy = e.clientY - window.innerHeight / 2;

  field.style.transform =
    `translate(calc(-50% + ${dx * 0.02}px), calc(-50% + ${dy * 0.02}px))`;

  field.style.opacity = 0.55;
});
