const noBtn = document.getElementById("noBtn");
noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("touchstart", moveButton);

function moveButton() {
  const x = Math.random() * window.innerWidth * 0.8;
  const y = Math.random() * window.innerHeight * 0.8;
  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}
