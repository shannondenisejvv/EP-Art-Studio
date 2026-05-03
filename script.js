document.getElementById('year').textContent = new Date().getFullYear();

const track = document.querySelector(".pottery-track");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

function slideAmount() {
  return track.querySelector("img").offsetWidth + 16;
}

next.onclick = () => track.scrollBy({ left: slideAmount(), behavior: "smooth" });
prev.onclick = () => track.scrollBy({ left: -slideAmount(), behavior: "smooth" });

// DRAG
let isDown = false;
let startX;
let scrollLeft;

track.addEventListener("pointerdown", (e) => {
  isDown = true;
  startX = e.pageX;
  scrollLeft = track.scrollLeft;
  track.classList.add("dragging");
});

track.addEventListener("pointerup", () => {
  isDown = false;
  track.classList.remove("dragging");
});

track.addEventListener("pointermove", (e) => {
  if (!isDown) return;
  const walk = (e.pageX - startX) * 1.2;
  track.scrollLeft = scrollLeft - walk;
});
